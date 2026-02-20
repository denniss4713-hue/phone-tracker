const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Store connected devices and their locations
const devices = new Map();

// API to register a device (called by mobile app)
app.post('/api/register', (req, res) => {
  const { deviceId, phoneNumber, name } = req.body;
  
  if (!deviceId || !phoneNumber) {
    return res.status(400).json({ error: 'deviceId and phoneNumber required' });
  }
  
  devices.set(deviceId, {
    phoneNumber,
    name: name || phoneNumber,
    location: null,
    lastUpdate: Date.now(),
    online: true
  });
  
  // Notify trackers about new device
  io.emit('deviceUpdated', {
    deviceId,
    phoneNumber,
    name: name || phoneNumber,
    online: true
  });
  
  res.json({ success: true, deviceId });
});

// API to update location (called by mobile app)
app.post('/api/update-location', (req, res) => {
  const { deviceId, latitude, longitude, accuracy, timestamp } = req.body;
  
  if (!deviceId) {
    return res.status(400).json({ error: 'deviceId required' });
  }
  
  const device = devices.get(deviceId);
  if (device) {
    device.location = {
      lat: latitude,
      lng: longitude,
      accuracy: accuracy || 0,
      timestamp: timestamp || Date.now()
    };
    device.lastUpdate = Date.now();
    device.online = true;
    
    // Broadcast location to all trackers in real-time
    io.emit('locationUpdate', {
      deviceId,
      phoneNumber: device.phoneNumber,
      name: device.name,
      location: device.location
    });
    
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Device not found' });
  }
});

// API to get all devices
app.get('/api/devices', (req, res) => {
  const deviceList = [];
  devices.forEach((device, deviceId) => {
    deviceList.push({
      deviceId,
      phoneNumber: device.phoneNumber,
      name: device.name,
      location: device.location,
      online: device.online,
      lastUpdate: device.lastUpdate
    });
  });
  res.json(deviceList);
});

// API to get specific device
app.get('/api/device/:deviceId', (req, res) => {
  const device = devices.get(req.params.deviceId);
  if (device) {
    res.json({
      deviceId: req.params.deviceId,
      phoneNumber: device.phoneNumber,
      name: device.name,
      location: device.location,
      online: device.online,
      lastUpdate: device.lastUpdate
    });
  } else {
    res.status(404).json({ error: 'Device not found' });
  }
});

// API to request location from device
app.post('/api/request-location', (req, res) => {
  const { deviceId } = req.body;
  
  const device = devices.get(deviceId);
  if (device) {
    io.emit('locationRequest', { deviceId });
    res.json({ success: true, message: 'Location request sent' });
  } else {
    res.status(404).json({ error: 'Device not found' });
  }
});

// Socket.io for real-time communication
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  // Send current devices list to new client
  const deviceList = [];
  devices.forEach((device, deviceId) => {
    deviceList.push({
      deviceId,
      phoneNumber: device.phoneNumber,
      name: device.name,
      location: device.location,
      online: device.online,
      lastUpdate: device.lastUpdate
    });
  });
  socket.emit('initialDevices', deviceList);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Phone Tracker Server running on port ${PORT}`);
});


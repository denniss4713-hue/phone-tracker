// Phone Data - Country codes and their cities with coordinates
var phoneData = {
    '91': {name: 'India', cities: [
        {n:'Mumbai',la:19.0760,lo:72.8777},
        {n:'New Delhi',la:28.6139,lo:77.2090},
        {n:'Bangalore',la:12.9716,lo:77.5946},
        {n:'Hyderabad',la:17.3850,lo:78.4867},
        {n:'Chennai',la:13.0827,lo:80.2707}
    ]},
    '1': {name: 'United States', cities: [
        {n:'New York',la:40.7128,lo:-74.0060},
        {n:'Los Angeles',la:34.0522,lo:-118.2437},
        {n:'Chicago',la:41.8781,lo:-87.6298},
        {n:'Houston',la:29.7604,lo:-95.3698},
        {n:'San Francisco',la:37.7749,lo:-122.4194}
    ]},
    '44': {name: 'United Kingdom', cities: [
        {n:'London',la:51.5074,lo:-0.1278},
        {n:'Manchester',la:53.4808,lo:-2.2426},
        {n:'Birmingham',la:52.4862,lo:-1.8904}
    ]},
    '971': {name: 'UAE', cities: [
        {n:'Dubai',la:25.2048,lo:55.2708},
        {n:'Abu Dhabi',la:24.4539,lo:54.3773}
    ]},
    '81': {name: 'Japan', cities: [
        {n:'Tokyo',la:35.6762,lo:139.6503},
        {n:'Osaka',la:34.6937,lo:135.5023}
    ]},
    '49': {name: 'Germany', cities: [
        {n:'Berlin',la:52.5200,lo:13.4050},
        {n:'Munich',la:48.1351,lo:11.5820}
    ]},
    '33': {name: 'France', cities: [
        {n:'Paris',la:48.8566,lo:2.3522},
        {n:'Lyon',la:45.7640,lo:4.8357}
    ]},
    '385': {name: 'Croatia', cities: [
        {n:'Zagreb',la:45.8150,lo:15.9819},
        {n:'Split',la:43.5081,lo:16.4402},
        {n:'Rijeka',la:45.3271,lo:14.4422},
        {n:'Osijek',la:45.5550,lo:18.6935},
        {n:'Zadar',la:44.1194,lo:15.2421}
    ]},
    '31': {name: 'Netherlands', cities: [
        {n:'Amsterdam',la:52.3676,lo:4.9041},
        {n:'Rotterdam',la:51.9244,lo:4.4777}
    ]},
    '32': {name: 'Belgium', cities: [
        {n:'Brussels',la:50.8503,lo:4.3517},
        {n:'Antwerp',la:51.2194,lo:4.4025}
    ]},
    '41': {name: 'Switzerland', cities: [
        {n:'Zurich',la:47.3769,lo:8.5417},
        {n:'Geneva',la:46.2044,lo:6.1432}
    ]},
    '43': {name: 'Austria', cities: [
        {n:'Vienna',la:48.2082,lo:16.3738},
        {n:'Salzburg',la:47.8095,lo:13.0550}
    ]},
    '48': {name: 'Poland', cities: [
        {n:'Warsaw',la:52.2297,lo:21.0122},
        {n:'Krakow',la:50.0647,lo:19.9450}
    ]},
    '46': {name: 'Sweden', cities: [
        {n:'Stockholm',la:59.3293,lo:18.0686},
        {n:'Gothenburg',la:57.7089,lo:11.9746}
    ]},
    '47': {name: 'Norway', cities: [
        {n:'Oslo',la:59.9139,lo:10.7522},
        {n:'Bergen',la:60.3913,lo:5.3221}
    ]},
    '45': {name: 'Denmark', cities: [
        {n:'Copenhagen',la:55.6761,lo:12.5683},
        {n:'Aarhus',la:56.1629,lo:10.2039}
    ]},
    '358': {name: 'Finland', cities: [
        {n:'Helsinki',la:60.1699,lo:24.9384},
        {n:'Tampere',la:61.4978,lo:23.7608}
    ]},
    '353': {name: 'Ireland', cities: [
        {n:'Dublin',la:53.3498,lo:-6.2603},
        {n:'Cork',la:51.8969,lo:-8.4863}
    ]},
    '351': {name: 'Portugal', cities: [
        {n:'Lisbon',la:38.7223,lo:-9.1393},
        {n:'Porto',la:41.1579,lo:-8.6291}
    ]},
    '30': {name: 'Greece', cities: [
        {n:'Athens',la:37.9838,lo:23.7275},
        {n:'Thessaloniki',la:40.6401,lo:22.9444}
    ]},
    '420': {name: 'Czech Republic', cities: [
        {n:'Prague',la:50.0755,lo:14.4378},
        {n:'Brno',la:49.1951,lo:16.6068}
    ]},
    '36': {name: 'Hungary', cities: [
        {n:'Budapest',la:47.4979,lo:19.0402},
        {n:'Debrecen',la:47.5316,lo:21.6273}
    ]},
    '40': {name: 'Romania', cities: [
        {n:'Bucharest',la:44.4268,lo:26.1025},
        {n:'Cluj-Napoca',la:46.7712,lo:23.6236}
    ]},
    '380': {name: 'Ukraine', cities: [
        {n:'Kyiv',la:50.4501,lo:30.5234},
        {n:'Odesa',la:46.4825,lo:30.7233}
    ]},
    '7': {name: 'Russia', cities: [
        {n:'Moscow',la:55.7558,lo:37.6173},
        {n:'Saint Petersburg',la:59.9343,lo:30.3351}
    ]},
    '86': {name: 'China', cities: [
        {n:'Beijing',la:39.9042,lo:116.4074},
        {n:'Shanghai',la:31.2304,lo:121.4737}
    ]},
    '82': {name: 'South Korea', cities: [
        {n:'Seoul',la:37.5665,lo:126.9780},
        {n:'Busan',la:35.1796,lo:129.0756}
    ]},
    '61': {name: 'Australia', cities: [
        {n:'Sydney',la:-33.8688,lo:151.2093},
        {n:'Melbourne',la:-37.8136,lo:144.9631}
    ]},
    '55': {name: 'Brazil', cities: [
        {n:'São Paulo',la:-23.5505,lo:-46.6333},
        {n:'Rio de Janeiro',la:-22.9068,lo:-43.1729}
    ]},
    '54': {name: 'Argentina', cities: [
        {n:'Buenos Aires',la:-34.6037,lo:-58.3816},
        {n:'Córdoba',la:-31.4201,lo:-64.1888}
    ]},
    '52': {name: 'Mexico', cities: [
        {n:'Mexico City',la:19.4326,lo:-99.1332},
        {n:'Guadalajara',la:20.6597,lo:-103.3496}
    ]},
    '20': {name: 'Egypt', cities: [
        {n:'Cairo',la:30.0444,lo:31.2357},
        {n:'Alexandria',la:31.2001,lo:29.9187}
    ]},
    '27': {name: 'South Africa', cities: [
        {n:'Johannesburg',la:-26.2041,lo:28.0473},
        {n:'Cape Town',la:-33.9249,lo:18.4241}
    ]},
    '234': {name: 'Nigeria', cities: [
        {n:'Lagos',la:6.5244,lo:3.3792},
        {n:'Abuja',la:9.0765,lo:7.3986}
    ]},
    '254': {name: 'Kenya', cities: [
        {n:'Nairobi',la:-1.2921,lo:36.8219},
        {n:'Mombesa',la:-4.0435,lo:39.6682}
    ]},
    '92': {name: 'Pakistan', cities: [
        {n:'Karachi',la:24.8607,lo:67.0011},
        {n:'Lahore',la:31.5497,lo:74.3436}
    ]},
    '88': {name: 'Bangladesh', cities: [
        {n:'Dhaka',la:23.8103,lo:90.4125},
        {n:'Chittagong',la:22.3569,lo:91.7832}
    ]},
    '62': {name: 'Indonesia', cities: [
        {n:'Jakarta',la:-6.2088,lo:106.8456},
        {n:'Surabaya',la:-7.2575,lo:112.7521}
    ]},
    '66': {name: 'Thailand', cities: [
        {n:'Bangkok',la:13.7563,lo:100.5018},
        {n:'Phuket',la:7.8804,lo:98.3923}
    ]},
    '84': {name: 'Vietnam', cities: [
        {n:'Hanoi',la:21.0278,lo:105.8342},
        {n:'Ho Chi Minh',la:10.8231,lo:106.6297}
    ]},
    '63': {name: 'Philippines', cities: [
        {n:'Manila',la:14.5995,lo:120.9842},
        {n:'Cebu',la:10.3157,lo:123.8854}
    ]},
    '60': {name: 'Malaysia', cities: [
        {n:'Kuala Lumpur',la:3.1390,lo:101.6869},
        {n:'Penang',la:5.4141,lo:100.3288}
    ]},
    '65': {name: 'Singapore', cities: [
        {n:'Singapore',la:1.3521,lo:103.8198}
    ]},
    '90': {name: 'Turkey', cities: [
        {n:'Istanbul',la:41.0082,lo:28.9784},
        {n:'Ankara',la:39.9334,lo:32.8597}
    ]},
    '964': {name: 'Iraq', cities: [
        {n:'Baghdad',la:33.3152,lo:44.3661},
        {n:'Basra',la:30.5332,lo:47.7976}
    ]},
    '98': {name: 'Iran', cities: [
        {n:'Tehran',la:35.6892,lo:51.3890},
        {n:'Isfahan',la:32.6546,lo:51.6680}
    ]},
    '966': {name: 'Saudi Arabia', cities: [
        {n:'Riyadh',la:24.7136,lo:46.6753},
        {n:'Jeddah',la:21.5433,lo:39.1728}
    ]},
    '973': {name: 'Bahrain', cities: [
        {n:'Manama',la:26.2285,lo:50.5860}
    ]},
    '965': {name: 'Kuwait', cities: [
        {n:'Kuwait City',la:29.3759,lo:47.9774}
    ]},
    '968': {name: 'Oman', cities: [
        {n:'Muscat',la:23.5880,lo:58.3829}
    ]},
    '974': {name: 'Qatar', cities: [
        {n:'Doha',la:25.2854,lo:51.5310}
    ]}
};

// Country codes sorted by length (longest first for matching)
var countryCodes = ['385', '971', '420', '358', '353', '351', '380', '234', '254', '92', '88', '966', '964', '973', '965', '968', '974', '91', '44', '81', '49', '33', '31', '32', '41', '43', '48', '46', '47', '45', '30', '36', '40', '1', '7', '86', '82', '61', '55', '54', '52', '20', '27', '62', '66', '84', '63', '60', '65', '90', '98'];

// Global variables
var myDeviceId = null;
var watchId = null;
var selectedDeviceId = null;
var pollInterval = null;
var devices = [];
var API_URL = ''; // Local-only mode - no server needed

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful:', registration.scope);
            }, function(err) {
                console.log('ServiceWorker registration failed:', err);
            });
    });
}

// Initialize - local mode
function initPolling() {
    console.log('Running in local mode');
    
    // Load devices from local storage
    loadLocalDevices();
    
    // Check if there are shared devices via URL or QR
    checkForSharedDevices();
}

// Load all devices from server
async function loadDevices() {
    // In local mode, devices are managed via localStorage/IndexedDB
    // This function now loads from local storage
    loadLocalDevices();
}

// Load devices from local storage
function loadLocalDevices() {
    try {
        const storedDevices = localStorage.getItem('phoneTrackerDevices');
        devices = storedDevices ? JSON.parse(storedDevices) : [];
        displayDevices(devices);
        
        // Check if selected device has new location
        if (selectedDeviceId) {
            const device = devices.find(d => d.deviceId === selectedDeviceId);
            if (device && device.location) {
                displayTrackedLocation(device);
            }
        }
        
        // Continue polling for local device updates
        if (!pollInterval) {
            pollInterval = setInterval(loadLocalDevices, 2000);
        }
    } catch (error) {
        console.error('Error loading local devices:', error);
    }
}

// Save devices to local storage
function saveLocalDevices() {
    try {
        localStorage.setItem('phoneTrackerDevices', JSON.stringify(devices));
    } catch (error) {
        console.error('Error saving devices:', error);
    }
}

// Check for shared devices via URL parameters
function checkForSharedDevices() {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedData = urlParams.get('share');
    
    if (sharedData) {
        try {
            const decoded = atob(sharedData);
            const sharedDevice = JSON.parse(decoded);
            
            // Add shared device to list if not already present
            const exists = devices.some(d => d.deviceId === sharedDevice.deviceId);
            if (!exists) {
                devices.push(sharedDevice);
                saveLocalDevices();
                displayDevices(devices);
            }
        } catch (error) {
            console.error('Error parsing shared device:', error);
        }
    }
}

// Generate share link for a device
function generateShareLink(deviceId) {
    const device = devices.find(d => d.deviceId === deviceId);
    if (!device) return '';
    
    const shareData = JSON.stringify({
        deviceId: device.deviceId,
        phoneNumber: device.phoneNumber,
        name: device.name,
        location: device.location,
        online: device.online,
        lastUpdate: device.lastUpdate
    });
    
    const encoded = btoa(shareData);
    const baseUrl = window.location.origin + window.location.pathname;
    return baseUrl + '?share=' + encoded;
}

// Copy share link to clipboard
function copyShareLink(deviceId) {
    const link = generateShareLink(deviceId);
    if (link && navigator.clipboard) {
        navigator.clipboard.writeText(link).then(() => {
            alert('Share link copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
            prompt('Copy this link to share:', link);
        });
    } else {
        prompt('Copy this link to share:', link);
    }
}

// Remove a device
function removeDevice(deviceId) {
    if (confirm('Remove this device?')) {
        devices = devices.filter(d => d.deviceId !== deviceId);
        saveLocalDevices();
        
        if (selectedDeviceId === deviceId) {
            selectedDeviceId = null;
            document.getElementById('trackingResult').classList.remove('show');
        }
        
        displayDevices(devices);
    }
}

// Get country from phone number
function getCountryFromPhone(phoneNum) {
    var clean = phoneNum.replace(/[^0-9]/g, '');
    
    // Try to match country code
    for (var i = 0; i < countryCodes.length; i++) {
        if (clean.indexOf(countryCodes[i]) === 0) {
            return phoneData[countryCodes[i]] || null;
        }
    }
    return null;
}

// Lookup phone number location
function lookupPhoneNumber() {
    var phone = document.getElementById('phoneInput').value.trim();
    
    if (!phone || phone.length < 5) {
        alert('Please enter a valid phone number');
        return;
    }
    
    var countryData = getCountryFromPhone(phone);
    
    // Show result
    document.getElementById('result').classList.add('show');
    document.getElementById('phoneDisplay').textContent = phone;
    
    if (countryData) {
        // Get first city as default
        var city = countryData.cities[0];
        
        document.getElementById('statusBox').className = 'status success';
        document.getElementById('statusBox').textContent = '✅ Phone number location found!';
        
        document.getElementById('locationDisplay').textContent = '📍 ' + city.n + ', ' + countryData.name;
        
        document.getElementById('lat').textContent = city.la.toFixed(6) + '°';
        document.getElementById('lng').textContent = city.lo.toFixed(6) + '°';
        document.getElementById('acc').textContent = '~100km';
        document.getElementById('status').textContent = '● ESTIMATED';
        
        // Show on map
        document.getElementById('mapBox').innerHTML = 
            '<iframe src="https://www.google.com/maps?q=' + city.la + ',' + city.lo + '&z=8&output=embed"></iframe>';
    } else {
        document.getElementById('statusBox').className = 'status error';
        document.getElementById('statusBox').textContent = '⚠️ Unknown location';
        
        document.getElementById('locationDisplay').textContent = '📍 Unknown location';
        
        document.getElementById('lat').textContent = '--';
        document.getElementById('lng').textContent = '--';
        document.getElementById('acc').textContent = '--';
        document.getElementById('status').textContent = 'Unknown';
        
        document.getElementById('mapBox').innerHTML = '';
    }
}

// Display device list
function displayDevices(deviceList) {
    const container = document.getElementById('deviceList');
    
    if (!deviceList || deviceList.length === 0) {
        container.innerHTML = '<p class="no-devices">No devices connected. Share your location from another device to see it here.</p>';
        return;
    }
    
    let html = '';
    deviceList.forEach(device => {
        const isOnline = device.online ? '🟢 Online' : '🔴 Offline';
        const lastUpdate = device.lastUpdate ? new Date(device.lastUpdate).toLocaleTimeString() : 'Never';
        const hasLocation = device.location ? '📍' : '❌';
        const isMyDevice = device.deviceId === myDeviceId;
        
        html += `
            <div class="device-item ${selectedDeviceId === device.deviceId ? 'selected' : ''}" 
                 onclick="selectDevice('${device.deviceId}')">
                <div class="device-info">
                    <strong>${device.name || device.phoneNumber}</strong>
                    <span>${device.phoneNumber}</span>
                </div>
                <div class="device-status">
                    <span>${hasLocation} ${isOnline}</span>
                    <small>Last: ${lastUpdate}</small>
                </div>
                ${!isMyDevice ? `
                <div class="device-actions">
                    <button class="action-btn share-btn" onclick="event.stopPropagation(); copyShareLink('${device.deviceId}')" title="Share">📤</button>
                    <button class="action-btn remove-btn" onclick="event.stopPropagation(); removeDevice('${device.deviceId}')" title="Remove">❌</button>
                </div>
                ` : ''}
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Select a device to track
function selectDevice(deviceId) {
    selectedDeviceId = deviceId;
    loadDevices(); // Refresh to show selection
    
    // Find the selected device
    const device = devices.find(d => d.deviceId === deviceId);
    
    // Show tracking result
    document.getElementById('trackingResult').classList.add('show');
    
    if (device && device.location) {
        displayTrackedLocation(device);
    } else {
        document.getElementById('statusBox').className = 'status connecting';
        document.getElementById('statusBox').textContent = '🔄 Waiting for device location...';
        document.getElementById('locationDisplay').textContent = '📍 Waiting for location...';
        document.getElementById('lat').textContent = '--';
        document.getElementById('lng').textContent = '--';
        document.getElementById('acc').textContent = '--';
        document.getElementById('status').textContent = 'Searching...';
        document.getElementById('mapBox').innerHTML = '';
    }
}

// Display tracked location
function displayTrackedLocation(device) {
    const location = device.location;
    const phoneDisplay = document.getElementById('phoneDisplay');
    
    phoneDisplay.textContent = device.name || device.phoneNumber;
    
    document.getElementById('statusBox').className = 'status success';
    document.getElementById('statusBox').textContent = '✅ LIVE LOCATION TRACKED!';
    document.getElementById('locationDisplay').textContent = '📍 Location received';
    
    document.getElementById('lat').textContent = location.lat.toFixed(6) + '°';
    document.getElementById('lng').textContent = location.lng.toFixed(6) + '°';
    document.getElementById('acc').textContent = '±' + Math.round(location.accuracy) + 'm';
    document.getElementById('status').textContent = '● LIVE';
    
    // Update map
    document.getElementById('mapBox').innerHTML = 
        '<iframe src="https://www.google.com/maps?q=' + location.lat + ',' + location.lng + '&z=16&output=embed"></iframe>';
}

// Register device to share location (local mode)
function registerDevice() {
    const name = document.getElementById('myName').value.trim();
    const phone = document.getElementById('myPhone').value.trim();
    
    if (!phone || phone.length < 5) {
        alert('Please enter a valid phone number');
        return;
    }
    
    // Generate unique device ID
    myDeviceId = 'device_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    // Register locally
    const newDevice = {
        deviceId: myDeviceId,
        phoneNumber: phone,
        name: name || phone,
        location: null,
        lastUpdate: Date.now(),
        online: true
    };
    
    // Add to devices list
    devices.push(newDevice);
    saveLocalDevices();
    displayDevices(devices);
    
    document.getElementById('shareStatus').innerHTML = '<p class="success">✅ Registered! Starting location sharing...</p>';
    document.getElementById('sharingActive').classList.add('show');
    
    // Start watching location
    startLocationSharing();
}

// Start sharing location
function startLocationSharing() {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        return;
    }
    
    // Get initial position
    getCurrentLocation();
    
    // Watch position - update every 5 seconds
    watchId = navigator.geolocation.watchPosition(
        function(position) {
            updateLocation(position);
        },
        function(error) {
            console.log('Location error:', error);
            document.getElementById('shareStatus').innerHTML = 
                '<p class="error">⚠️ Location error: ' + error.message + '</p>';
        },
        {
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 5000
        }
    );
}

// Get current location once
function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            updateLocation(position);
        },
        function(error) {
            console.log('Location error:', error);
        },
        {
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 5000
        }
    );
}

// Update location to server (local mode - save to local storage)
function updateLocation(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    
    // Update display
    document.getElementById('myLat').textContent = lat.toFixed(6) + '°';
    document.getElementById('myLng').textContent = lng.toFixed(6) + '°';
    document.getElementById('myAcc').textContent = '±' + Math.round(accuracy) + 'm';
    
    // Save to local storage
    if (myDeviceId) {
        const deviceIndex = devices.findIndex(d => d.deviceId === myDeviceId);
        if (deviceIndex !== -1) {
            devices[deviceIndex].location = {
                lat: lat,
                lng: lng,
                accuracy: accuracy,
                timestamp: Date.now()
            };
            devices[deviceIndex].lastUpdate = Date.now();
            devices[deviceIndex].online = true;
            saveLocalDevices();
        }
    }
}

// Tab switching
function showTab(tabName, event) {
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Show/hide content
    document.getElementById('trackTab').classList.remove('active');
    document.getElementById('shareTab').classList.remove('active');
    document.getElementById('lookupTab').classList.remove('active');
    document.getElementById(tabName + 'Tab').classList.add('active');
}

// Initialize on page load
window.onload = function() {
    initPolling();
};

// Cleanup on page unload
window.onbeforeunload = function() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
    }
    if (pollInterval) {
        clearInterval(pollInterval);
    }
};


#!/usr/bin/env python3
"""
Phone Tracker Server - Python Implementation
Run with: python3 server.py
"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
import socketserver
import threading
import urllib.parse
from datetime import datetime

# Global storage for devices
devices = {}
device_lock = threading.Lock()

PORT = 3000

class TrackerHandler(SimpleHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
    
    def do_GET(self):
        if self.path == '/api/devices':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            with device_lock:
                device_list = []
                for device_id, device in devices.items():
                    device_list.append({
                        'deviceId': device_id,
                        'phoneNumber': device.get('phoneNumber', ''),
                        'name': device.get('name', ''),
                        'location': device.get('location'),
                        'online': device.get('online', False),
                        'lastUpdate': device.get('lastUpdate')
                    })
            
            self.wfile.write(json.dumps(device_list).encode())
        else:
            super().do_GET()
    
    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length)
        
        try:
            data = json.loads(body.decode())
        except:
            self.send_error(400, 'Invalid JSON')
            return
        
        if self.path == '/api/register':
            device_id = data.get('deviceId')
            phone_number = data.get('phoneNumber')
            name = data.get('name')
            
            if not device_id or not phone_number:
                self.send_error(400, 'deviceId and phoneNumber required')
                return
            
            with device_lock:
                devices[device_id] = {
                    'phoneNumber': phone_number,
                    'name': name or phone_number,
                    'location': None,
                    'lastUpdate': datetime.now().timestamp() * 1000,
                    'online': True
                }
            
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'success': True, 'deviceId': device_id}).encode())
            
            print(f"Device registered: {phone_number} ({device_id})")
            
        elif self.path == '/api/update-location':
            device_id = data.get('deviceId')
            
            if not device_id:
                self.send_error(400, 'deviceId required')
                return
            
            with device_lock:
                if device_id in devices:
                    devices[device_id]['location'] = {
                        'lat': data.get('latitude', 0),
                        'lng': data.get('longitude', 0),
                        'accuracy': data.get('accuracy', 0),
                        'timestamp': data.get('timestamp', datetime.now().timestamp() * 1000)
                    }
                    devices[device_id]['lastUpdate'] = datetime.now().timestamp() * 1000
                    devices[device_id]['online'] = True
                    
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': True}).encode())
                    
                    print(f"Location updated for {devices[device_id].get('phoneNumber')}")
                else:
                    self.send_error(404, 'Device not found')
        else:
            self.send_error(404, 'Not found')
    
    def log_message(self, format, *args):
        print(f"[{self.log_date_time_string()}] {format % args}")

def run_server():
    # Change to the directory where the HTML files are
    import os
    os.chdir('/home/dennis/Desktop/phone-tracker')
    
    server = HTTPServer(('0.0.0.0', PORT), TrackerHandler)
    print(f"Phone Tracker Server running on http://localhost:{PORT}")
    print("Open this URL in your browser to access the tracker")
    print("Press Ctrl+C to stop the server")
    
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped")
        server.shutdown()

if __name__ == '__main__':
    run_server()


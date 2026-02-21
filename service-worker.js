const CACHE_NAME = 'phone-tracker-v7';

// Use absolute paths for PWA Builder compatibility
const BASE_URL = 'https://phone-tracker-p4sz.vercel.app';
const urlsToCache = [
  BASE_URL + '/',
  BASE_URL + '/index.html',
  BASE_URL + '/style.css',
  BASE_URL + '/script.js',
  BASE_URL + '/manifest.json',
  BASE_URL + '/privacy-policy.html',
  BASE_URL + '/icons/icon-192.png',
  BASE_URL + '/icons/icon-512.png'
];

// Install event - cache files
self.addEventListener('install', event => {
  // Skip waiting - activate immediately
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Cache install error:', err);
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(response => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          var responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
            
          return response;
        });
      })
      .catch(() => {
        // If both fail, show offline message
        return caches.match('index.html');
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  // Claim clients immediately
  event.waitUntil(
    clients.claim().then(() => {
      return caches.keys();
    }).then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


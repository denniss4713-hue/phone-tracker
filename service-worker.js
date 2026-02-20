const CACHE_NAME = 'phone-tracker-v1';
const urlsToCache = [
  'https://denniss4713-hue.github.io/phone-tracker/',
  'https://denniss4713-hue.github.io/phone-tracker/index.html',
  'https://denniss4713-hue.github.io/phone-tracker/style.css',
  'https://denniss4713-hue.github.io/phone-tracker/script.js',
  'https://denniss4713-hue.github.io/phone-tracker/manifest.json',
  'https://denniss4713-hue.github.io/phone-tracker/privacy-policy.html',
  'https://denniss4713-hue.github.io/phone-tracker/icons/icon-192.png',
  'https://denniss4713-hue.github.io/phone-tracker/icons/icon-512.png'
];

// Install event - cache files
self.addEventListener('install', event => {
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
  event.waitUntil(
    caches.keys().then(cacheNames => {
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


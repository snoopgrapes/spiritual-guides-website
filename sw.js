const CACHE_NAME = 'spiritual-hub-v1';
const urlsToCache = [
  '/index.html',
  '/spiritual-guides.html',
  '/7%20Day%20Plan.html',
  '/7-Day%20Spiritual%20Battle%20Marriage.html',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  // External resources
  'https://fonts.googleapis.com/...',
  'https://cdnjs.cloudflare.com/...'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Handle navigation requests separately
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // For all other requests, try cache first, then network
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        return cachedResponse || fetch(event.request)
          .then(response => {
            // Cache the response if it's successful
            if (response && response.status === 200) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseToCache));
            }
            return response;
          });
      })
  );
});
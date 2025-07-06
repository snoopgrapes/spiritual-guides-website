const CACHE_NAME = 'spiritual-hub-v1';
const urlsToCache = [
  '/index.html',
  '/spiritual-guides.html',
  '/7%20Day%20Plan.html',
  '/7-Day%20Spiritual%20Battle%20Marriage.html',
  '/icons/icon-192x192.png',  // Now in correct location
  '/icons/icon-512x512.png',  // Now in correct location
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
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
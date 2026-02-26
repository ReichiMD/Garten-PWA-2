const CACHE_NAME = 'gartenverein-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/src/style.css',
  '/src/app.ts'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

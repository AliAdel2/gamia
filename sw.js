const CACHE_NAME = 'khair-map-v1';
const assets = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/view.html',
  '/input.html',
  '/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

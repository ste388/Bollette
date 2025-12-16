const CACHE_NAME = 'bollette-v3'; // Ho cambiato versione per forzare l'aggiornamento
const urlsToCache = [
  '.',
  'index.html',
  'manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
var cacheName = 'alf-v1';
var filesToCache = [
    "./img/bg.jpg",
    "./img/apple-touch-icon.png",
    "./img/favicon.ico",
    "./img/favicon-192.png",
    "./js/alf_quotes.js",
    "./js/alf.js",
    "./css",
    "./css/alf.css",
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

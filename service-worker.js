var alf_cache_name = 'alf';
var alf_app_files = [
    "/",
    "/index.html",
    "/img/bg.jpg",
    "/img/apple-touch-icon.png",
    "/img/favicon.ico",
    "/img/favicon-192.png",
    "/js/alf.js",
    "/js/alf_quotes.js",
    "/css/alf.css",
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(alf_cache_name).then(function(cache) {
            console.log('[ServiceWorker] Caching alf app');
            return cache.addAll(alf_app_files);
        })
    );
});


self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});


/*
 * We need to increment alf_cache_name to remove old cached files...
 */

/*
self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== alf_cache_name) {
                console.log('[ServiceWorker] Removing old cache', key);
                return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});
*/

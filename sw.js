// Gaze Guard Service Worker
const CACHE_NAME = 'gazeguard-v2';
const ASSETS = [
    '/landing.html',
    '/index.html',
    '/i18n.js',
    '/features.js',
    '/hero-eye.png',
    '/manifest.json'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    // Network-first for API/CDN resources, cache-first for local assets
    const url = new URL(e.request.url);
    if (url.origin !== location.origin) {
        // External resources (CDN, fonts) — network first, fallback to cache
        e.respondWith(
            fetch(e.request)
                .then(res => {
                    const clone = res.clone();
                    caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
                    return res;
                })
                .catch(() => caches.match(e.request))
        );
    } else {
        // Local assets — cache first, fallback to network
        e.respondWith(
            caches.match(e.request)
                .then(cached => cached || fetch(e.request).then(res => {
                    const clone = res.clone();
                    caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
                    return res;
                }))
        );
    }
});

const CACHE_NAME = 'nexy-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/welcome.html',
  '/login.html',
  '/register.html',
  '/home.html',
  '/profile.html',
  '/imp/nav-dock-button.html',
  '/imp/loader.html'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch Event (Network First Strategy)
// This ensures that Firebase Auth and Feed data are always fresh
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});

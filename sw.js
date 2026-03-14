// sw.js

// Installations-Event
self.addEventListener('install', event => {
  console.log('Service Worker installiert');
});

// Fetch-Event (zwingt den Browser, den Service Worker zu benutzen)
self.addEventListener('fetch', event => {
  // Hier könntest du Caching hinzufügen
});
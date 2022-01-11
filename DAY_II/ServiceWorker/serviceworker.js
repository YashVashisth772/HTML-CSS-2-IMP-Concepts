var cacheName = "v7";

var cacheAssests = ["Index.html", "About.html", "js/script.js"];

self.addEventListener("install", function (e) {
  console.log("Service Worker : Installed !");
  // configure the cache
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        console.log("Service Worker : Caching Files");
        cache.addAll(cacheAssests);
      })
      .then(function () {
        self.skipWaiting();
      })
  );
});

self.addEventListener("activate", function (e) {
  console.log("Service Worker : Activated !");
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (c) {
          if (c !== cacheName) {
            console.log("Service worker : Deleting Old Cache !");
            return caches.delete(c);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function (e) {
  console.log("Service Worker : Fetching !");
  e.respondWith(
    fetch(e.request).catch(function () {
      return caches.match(e.request);
    })
  );
});

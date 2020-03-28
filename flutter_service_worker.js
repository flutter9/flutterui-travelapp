'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e56d1a8c1a14b5f6bb990711d7fcccce",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/assets/japan.jpg": "b9af5490310898bccb52538eb4f9555f",
"/assets/assets/canada.jpg": "c2f353dd938bfe166df1f812906123a3",
"/assets/assets/kyoto.jpg": "0e8f9182ce4fce3ab2ab5d05f44a8629",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "72f8f4f2cd0f392ce9b9d140b5777243",
"/assets/LICENSE": "c8d529393e60c41ab582ad1312ee9641",
"/main.dart.js": "e3a454eff31efdfba0551b159d2944b6",
"/web/index.html": "e6e25ef07ab061f3396db68372e4cc59"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

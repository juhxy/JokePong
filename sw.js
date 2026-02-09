self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("jokepong-cache").then(cache => {
      return cache.addAll([
        "JokePong.html",
        "manifest.json",
        "bg.png",
        "sw.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

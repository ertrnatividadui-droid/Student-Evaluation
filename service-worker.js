self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open("eva-cache").then(function(cache) {
            return cache.addAll(["index.html"]);
        })
    );
});
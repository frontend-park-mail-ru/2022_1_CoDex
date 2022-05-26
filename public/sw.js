const cacheName = "fallback";
const cacheURLs = [ "main.ts" ];
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(
            (cache) => {
                return cache.addAll(cacheURLs);
            }
        ).catch((err) => {
            console.log("Cache error, we are truly sorry");
        }),
    );
});

self.addEventListener("fetch", 
    (e) => {
        e.respondWith((async () => {
            if (navigator.onLine === true) {
                const response = await fetch(e.request);
                if (e.request.method !== "GET") {
                    return response;
                }
                const clone = response.clone();
                caches.open(cacheName)
                    .then((cache) => {
                        cache.put(e.request, clone);
                    });
                return response;
            }
            const response = await caches.match(e.request);
            return response || new Response(null, { status: 500 });
        })());
    }
);

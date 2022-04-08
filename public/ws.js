import { cacheName, cacheURLs, cacheRequest, fallbackURL } from "./consts/cache.js";

self.addEventListener("install", (e) => {
    e.waitUntil(
        fetch(cacheRequest, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors",
            credentials: "include",
        }).then(async (response) => {
            const cache = await caches.open(cacheName);
            await cache.put(fallbackURL, response.clone());
            const parsedResponse = await response.json();
            const imageURLs = parsedResponse.collectionList.map(
                (collection) => `localhost:3000/server/images/${collection.imgSrc}`
            );
            const responses = await Promise.all(imageURLs.map(
                (currentImageURL) => {
                    return fetch(currentImageURL, {mode: "cors"});
                }
            ));
            await Promise.all(responses.map(
                (response, i) => {
                    return cache.put(imageURLs[i], response.clone());
                }
            ));
            await cache.addAll(cacheURLs);
        })
    );
});

self.addEventListener("activate", 
    (e) => {
        e.waitUntil(self.clients.claim());
    }
);

self.addEventListener("fetch", 
    (e) => {
        caches.match(e.request).then(
            (response) => {
                return response || fetch(e.request).then(
                    (response) => {
                        return caches.open(cacheName).then(
                            (cache) => {
                                return response;
                            }
                        );
                    }
                );
            }
        ).catch(() => {
            if (e.request.url.startsWith(cacheRequest)) {
                return caches.match(fallbackURL);
            }
            return new Response(`<div style="width: 100%; height: 100%; display: flex; align-items: center; ' +
            'flex-direction: column;">' + '<h1 style="margin: auto;">Internet connection was lost:(</h1>' +
            '<img alt="logo" src="/pics/logo.svg"></div>`, {
                headers: {"Content-Type": "text/html"};
            });
        });
    }
);
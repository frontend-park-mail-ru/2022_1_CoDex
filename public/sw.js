

const cacheName = "fallback";
const cacheURLs = ["/", "/bundle.js", "/server/images/logo.svg"];
const cacheRequest = "http://localhost:3001/api/v1/collections"; // TOCHANGE
const client = "http://localhost:3000";
const fallbackURL = "/cache/api";

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
            console.log(response);
            const parsedResponse = await response.json();
            console.log(parsedResponse);
            const imageURLs = parsedResponse.collectionlist.map(
                (collection) => `http://localhost:3000/server/images/${collection.imgsrc}`
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
        console.log("Time to fetch");
        caches.match(e.request).then(
            (response) => {
                console.log("1");
                console.log("Response", response);
                return response || fetch(e.request).then(
                    (response) => {
                        console.log("2")
                        console.log(response);
                        return caches.open(cacheName).then(
                            (cache) => {
                                return response;
                            }
                        );
                    }
                );
            }
        ).catch(() => {
            console.log("Catched: ", e.request.url);
            if (e.request.url.startsWith(client)) {
                let response = caches.match(fallbackURL);
                return response;
            }
            console.log("3");
            return new Response(`<div style="width: 100%; height: 100%; display: flex; align-items: center; ' +
            'flex-direction: column;">' + '<h1 style="margin: auto;">Internet connection was lost:(</h1>' +
            '<img alt="logo" src="/pics/logo.svg"></div>`, {
                headers: {"Content-Type": "text/html"}
            });
        });
    }
);
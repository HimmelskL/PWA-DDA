const staticAnahuac = "dev-site-anahuac-v1";

const assets = [
    "/",
    "index.html",
    "app.css",
    "app.js",
    "/assets/images/DDA-72x72.png",
    "login.png",
    "producto.png",
    "register-pic.png"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticAnahuac).then(cache =>{
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request)
        .then(respond => {
            return respond || fetch(fetchEvent.request);
        })
    );
});

importScripts("/precache-manifest.064f0aeac25dc49ef0ebd12d4f00c2af.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.supperssWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", event => {
  if (event.data && event.data.action === "SKIP_WAITING") {
    self.skipWaiting();
  }
});


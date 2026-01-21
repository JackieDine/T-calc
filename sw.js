const CACHE_NAME = 't-calc-v1';
const ASSETS = [
  './index.html',
  './manifest.json'
];

// 安装并缓存
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// 拦截请求，离线优先
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});

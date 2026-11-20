// Scope-aware, network-first app shell for the preview. Never intercept application data.
const CACHE='life-rpg-shell-v0.3.2';
const ROOT=self.registration.scope;
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll([ROOT,ROOT+'manifest.webmanifest',ROOT+'icons/life-rpg-icon.svg'])).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('life-rpg-shell-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;const url=new URL(req.url);if(!url.pathname.startsWith(new URL(ROOT).pathname))return;if(req.mode==='navigate'){event.respondWith(fetch(req).catch(()=>caches.match(ROOT)));return;}});

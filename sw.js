// Service Worker mínimo para habilitar PWA e Instalação em Tela Cheia no Chrome
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Apenas repassa as requisições (não faz cache offline pesado para evitar travar atualizações)
  e.respondWith(fetch(e.request));
});

// Service worker mínimo: solo existe para que el navegador permita
// "Añadir a pantalla de inicio". No cachea nada a propósito, porque
// esta app necesita siempre datos en tiempo real desde Firebase.
self.addEventListener("install", (e) => { self.skipWaiting(); });
self.addEventListener("activate", (e) => { self.clients.claim(); });
self.addEventListener("fetch", (e) => {
  // Deja pasar todas las peticiones directamente a la red, sin caché.
});
/* NexusCharts – service worker: solo per le notifiche (non salva copie dell'app) */
const WORKER = 'https://tradingcharts.nexuscharts.workers.dev';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('push', e => {
  e.waitUntil((async () => {
    let m = null;
    try { if (e.data) m = e.data.json(); } catch (_) {}
    if (!m) { try { const r = await fetch(WORKER + '/push/latest', { cache: 'no-store' }); m = await r.json(); } catch (_) {} }
    m = m || {};
    await self.registration.showNotification(m.title || 'NexusCharts', {
      body: m.body || '', icon: 'logo-icon.png', badge: 'logo-icon.png', tag: m.id || 'nexus', data: { url: './' }
    });
  })());
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
    for (const c of cs) if ('focus' in c) return c.focus();
    return self.clients.openWindow('./');
  }));
});

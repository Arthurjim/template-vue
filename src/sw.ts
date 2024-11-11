import { precacheAndRoute } from 'workbox-precaching'

declare global {
  interface ServiceWorkerGlobalScope {
    Notification: typeof Notification
  }
}

declare let self: ServiceWorkerGlobalScope
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})

// Receive push notifications
self.addEventListener('push', async function (e) {
  if (!(self.Notification && self.Notification.permission === 'granted')) {
    return
  }

  if (e.data) {
    const messageText = await e.data.text()
    e.waitUntil(
      self.registration.showNotification('Notification Title', {
        body: messageText
      })
    )
  }
})

precacheAndRoute(self.__WB_MANIFEST)

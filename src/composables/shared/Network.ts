import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export interface UsePwa {
  isOffline: Ref<boolean>
}

export function useNetwork() {
  const isOffline = ref(!navigator.onLine)

  const updateOnlineStatus = () => {
    isOffline.value = !navigator.onLine
  }

  onMounted(() => {
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
  })

  onUnmounted(() => {
    window.removeEventListener('online', updateOnlineStatus)
    window.removeEventListener('offline', updateOnlineStatus)
  })

  return { isOffline }
}

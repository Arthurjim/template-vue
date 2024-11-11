import { onMounted, ref, type Ref } from 'vue'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export interface UsePwa {
  showInstallPrompt: Ref<boolean>
  installApp: () => Promise<void>
}

export function usePwa(): UsePwa {
  const showInstallPrompt = ref(false)
  let deferredPrompt: BeforeInstallPromptEvent | null = null

  const installApp = async () => {
    if (!deferredPrompt) {
      showInstallPrompt.value = false
      return
    }
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      console.log('User accepted the installation')
    } else {
      console.log('User dismissed the installation')
    }
    deferredPrompt = null
    showInstallPrompt.value = false
  }

  onMounted(() => {
    window.addEventListener('contextmenu', (event) => event.preventDefault())
    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault()
      deferredPrompt = e as BeforeInstallPromptEvent
      showInstallPrompt.value = true
    })
  })

  return {
    installApp,
    showInstallPrompt
  }
}

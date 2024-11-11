import { useAuthStore } from '@stores/Auth'

export function logged({ next }: { next: (route?: { name: string }) => void }) {
  const authStore = useAuthStore()

  if (authStore.isLoggedIn) {
    return next({
      name: 'Dashboard'
    })
  }

  return next()
}

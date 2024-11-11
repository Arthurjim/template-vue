import { useAuthStore } from '@stores/Auth'

export function auth({ next }: { next: (route?: { name: string }) => void }) {
  const authStore = useAuthStore()

  if (!authStore.isLoggedIn) {
    return next({
      name: 'Login'
    })
  }

  return next()
}

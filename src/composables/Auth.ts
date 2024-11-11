import { inject, type Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { getCurrentUser, signOut } from 'aws-amplify/auth'
import { Hub } from 'aws-amplify/utils'

import type { ProviderUseCaseAuth } from '@dependencies/Auth'
import { Logger } from '@utils/log/Logger'

import { useAuthStore } from '@stores/Auth'

interface UseAuth {
  init: () => void
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  getProfile: () => Promise<void>
  isLoggedIn: Ref<boolean>
}

type ProviderAuth = ProviderUseCaseAuth | undefined

export function useAuth(): UseAuth {
  const provider = inject<ProviderAuth>('providerAuth', undefined)
  const { user, isLoggedIn } = storeToRefs(useAuthStore())

  const setAuthTokens = async (): Promise<void> => {
    const user = await getCurrentUser()
    Logger.debug('User: ', user)
    isLoggedIn.value = !!user
  }

  const getProfile = async (): Promise<void> => {
    if (!provider) return

    try {
      const response = await provider.profileGetter.getter()

      const profile = response.toPrimitive()
      user.value = {
        name: profile.name,
        image: profile.image,
        email: profile.email,
        roles: profile.roles
      }
      localStorage.setItem('user', JSON.stringify(user.value))
    } catch (error) {
      Logger.debug('Error: ', error)
    }
  }

  const init = async (): Promise<void> => {
    try {
      const amplifyEvents = new Map<string, () => Promise<void>>()

      amplifyEvents.set('auth', setAuthTokens)
      amplifyEvents.set('tokenRefresh', setAuthTokens)
      amplifyEvents.set('signedOut', logout)

      Hub.listen('auth', ({ payload }) => {
        Logger.debug('auth event: ', { payload })
        amplifyEvents.get(payload.event)
      })

      await setAuthTokens()
    } catch (error) {
      await logout()
      Logger.debug('Error: ', error)
    }
  }

  const login = async (email: string, password: string) => {
    if (!provider) throw new Error('Provider not found')

    await provider.userAuthenticator.authenticate(email, password)

    // await getProfile()
    isLoggedIn.value = true
  }

  const logout = async (): Promise<void> => {
    await signOut()
    user.value = {
      name: '',
      image: '',
      email: '',
      roles: []
    }
    isLoggedIn.value = false
    localStorage.removeItem('user')
  }

  return {
    init,
    login,
    logout,
    getProfile,
    isLoggedIn
  }
}

import { inject } from 'vue'
import { storeToRefs } from 'pinia'

import { Logger } from '@utils/log/Logger'

import { useServiceStore } from '@stores/Service'
import { useLanguageStore } from '@stores/Language'
import { useGuestStore } from '@stores/Guest'

import type { ProviderUseCaseService } from '@dependencies/Service'

export interface UseService {
  getters: () => Promise<void>
  reset: () => void
}

type providerService = ProviderUseCaseService | undefined

export function useService(): UseService {
  const provider = inject<providerService>('providerService', undefined)
  const { services } = storeToRefs(useServiceStore())
  const { language } = storeToRefs(useLanguageStore())
  const { guest } = storeToRefs(useGuestStore())

  const getters = async (): Promise<void> => {
    if (!provider) return
    services.value = []
    try {
      const response = await provider.serviceSearcher.execute(guest.value.hotel, language.value)
      if (response.length > 0) {
        services.value = response.map((service) => service.toPrimitive())
      }
    } catch (error) {
      Logger.debug('error', error)
      throw error
    }
  }

  const reset = (): void => {
    services.value = []
  }

  return {
    reset,
    getters
  }
}

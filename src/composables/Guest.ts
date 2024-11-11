import { inject } from 'vue'
import { storeToRefs } from 'pinia'

import { Logger } from '@utils/log/Logger'

import { useGuestStore } from '@stores/Guest'

import type { ProviderUseCaseGuest } from '@dependencies/Guest'

export interface UseGuest {
  getters: (reservation: number, hotel: string) => Promise<void>
  select: (index: number) => void
  reset: () => void
}

type ProviderGuest = ProviderUseCaseGuest | undefined

export function useGuest(): UseGuest {
  const provider = inject<ProviderGuest>('providerGuest', undefined)
  const { guest, guests } = storeToRefs(useGuestStore())

  const getters = async (reservation: number, hotel: string): Promise<void> => {
    Logger.debug('reservation', reservation)
    if (!provider) return
    Logger.debug('provider', provider)
    guests.value = []
    try {
      const response = await provider.guestSearcher.execute(reservation, hotel)
      if (response.length > 0) {
        guests.value = response.map((guest) => guest.toPrimitive())
        sessionStorage.setItem('guests', JSON.stringify(guests.value))
      }
    } catch (error) {
      Logger.debug('error', error)
      throw error
    }
  }

  const select = (index: number): void => {
    const selectGuest = guests.value[index]
    if (!selectGuest) throw new Error('Guest not found')

    guest.value = { ...selectGuest }
    sessionStorage.setItem('guest', JSON.stringify(guest.value))
  }

  const reset = (): void => {
    guest.value = {
      hotel: '',
      folio: 0,
      name: '',
      lastName: '',
      room: 0,
      resort: ''
    }
    sessionStorage.removeItem('guest')
    guests.value = []
    sessionStorage.removeItem('guests')
  }

  return {
    reset,
    select,
    getters
  }
}

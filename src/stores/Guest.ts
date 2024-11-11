import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

import type { Primitive } from '@modules/guest/domain/Guest'

export const useGuestStore = defineStore('guest', () => {
  const guestsStorage = sessionStorage.getItem('guests')
  const parsedGuests = guestsStorage ? JSON.parse(guestsStorage) : []
  const guests: Ref<Primitive[]> = ref(parsedGuests)

  const guestStorage = sessionStorage.getItem('guest')
  const parsedGuest = guestStorage
    ? JSON.parse(guestStorage)
    : {
        hotel: '',
        folio: 0,
        name: '',
        lastName: '',
        room: 0
      }
  const guest: Ref<Primitive> = ref(parsedGuest)

  return {
    guest,
    guests
  }
})

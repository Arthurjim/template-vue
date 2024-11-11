import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

import type { Primitive } from '@modules/auth/domain/AuthUser'

export const useAuthStore = defineStore('auth', () => {
  const userStorage = localStorage.getItem('user')
  const parsedUser = userStorage
    ? JSON.parse(userStorage)
    : {
        name: '',
        image: '',
        email: '',
        roles: []
      }
  const user: Ref<Primitive> = ref(parsedUser)
  const isLoggedIn = ref(false)

  return {
    user,
    isLoggedIn
  }
})

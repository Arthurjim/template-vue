import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

import type { Primitive } from '@modules/service/domain/Service'

interface ExtendedPrimitive extends Primitive {
  notes: string
  amount: number
}

export const useServiceStore = defineStore('service', () => {
  const services: Ref<Primitive[]> = ref([])
  const service: Ref<Primitive> = ref({
    codeOpera: '',
    name: '',
    description: '',
    image: ''
  })
  const miscStorage = sessionStorage.getItem('misc')
  const parsedMisc = miscStorage
    ? JSON.parse(miscStorage)
    : {
        codeOpera: '',
        name: '',
        description: '',
        image: '',
        notes: '',
        amount: 0
      }
  const misc: Ref<ExtendedPrimitive> = ref(parsedMisc)

  return {
    misc,
    service,
    services
  }
})

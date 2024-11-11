import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export interface Primitive {
  name: string
  lastName: string
  folio: string
  hotel: string
  room: string
  service: string
  amount: string
  notes: string
  codeOpera: string
  description: string
}

export const useSummaryStore = defineStore('summary', () => {
  const dataStorage = sessionStorage.getItem('data')
  const parsedData = dataStorage
    ? JSON.parse(dataStorage)
    : {
        name: '',
        lastName: '',
        folio: '',
        hotel: '',
        room: '',
        service: '',
        amount: '',
        notes: '',
        codeOpera: '',
        description: ''
      }
  const data: Ref<Primitive> = ref(parsedData)

  return {
    data
  }
})

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { i18n } from '@plugins/i18n/i18n'

export const useLanguageStore = defineStore('language', () => {
  const disabled = ref(false)
  const language = ref(i18n.global.locale.value)

  return {
    disabled,
    language
  }
})

import type { Ref } from 'vue'
import { storeToRefs } from 'pinia'

import { i18n } from '@plugins/i18n/i18n'
import { Locales } from '@src/locales'
import { useLanguageStore } from '@stores/Language'

export interface UseLanguage {
  setLanguage: (locale: string) => Promise<void>
  language: Ref<string>
}

export function useLanguage(): UseLanguage {
  const { language } = storeToRefs(useLanguageStore())

  const setLanguage = async (lang: string): Promise<void> => {
    const value = lang as Locales
    i18n.global.locale.value = value
    language.value = value
    localStorage.setItem('lang', value)
  }

  return {
    language,
    setLanguage
  }
}

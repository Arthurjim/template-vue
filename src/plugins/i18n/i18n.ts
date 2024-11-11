import { createI18n } from 'vue-i18n'

import { messages, defaultLocale } from '@src/locales'

const savedLocale = localStorage.getItem('lang') ?? defaultLocale

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: savedLocale,
  fallbackLocale: defaultLocale,
  messages,
  datetimeFormats: {
    'en-US': {
      short: {
        month: 'short',
        year: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }
    },
    'es-MX': {
      short: {
        month: 'short',
        year: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }
    }
  }
})

import sectionsEs from './modules/es-mx'
import sectionsEn from './modules/en-us'

import sharedEs from './common/es-mx'
import sharedEn from './common/en-us'

export enum Locales {
  EN = 'en-US',
  ES = 'es-MX'
}

export const LOCALES = [
  { value: Locales.EN, caption: 'English' },
  { value: Locales.ES, caption: 'Español' }
] as const

const messages = {
  [Locales.EN]: { ...sharedEn, ...sectionsEn },
  [Locales.ES]: { ...sharedEs, ...sectionsEs }
}

const defaultLocale = Locales.EN

export { messages, defaultLocale }

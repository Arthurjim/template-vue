import type { FunctionalComponent } from 'vue'

import PalaceResorts from './svg/palace-resorts.svg?component'
import ChevronDown from './svg/chevron-down.svg?component'
import ChevronUp from './svg/chevron-up.svg?component'
import Info from './svg/info.svg?component'
import Warning from './svg/warning.svg?component'
import SignMark from './svg/sign-mark.svg?component'

interface Collection {
  [key: string]: FunctionalComponent
}

export const collection: Collection = {
  'palace-resorts': PalaceResorts,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  info: Info,
  warning: Warning,
  'sign-mark': SignMark
}

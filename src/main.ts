import { createApp } from 'vue'
import App from '@src/App.vue'
import Aura from '@primevue/themes/aura'
import PrimeVue from 'primevue/config'
import { PalaceComponents } from '@prcomponents/pr-components-library'
import '@prcomponents/pr-components-library/dist/style.css'

import '@assets/styles/index.scss'

// Plugins
import '@plugins/amplify'

// Router
import router from '@src/router'
import { pinia } from '@plugins/pinia'
import { i18n } from '@plugins/i18n/i18n'
import { definePreset } from '@primevue/themes'

const app = createApp(App)

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{sky.900}',
          inverseColor: '#ffffff',
          hoverColor: '{sky.950}',
          activeColor: '{sky.950}'
        },
        highlight: {
          background: '{sky.950}',
          focusBackground: '{sky.700}',
          color: '#ffffff',
          focusColor: '#ffffff'
        }
      },
      dark: {
        primary: {
          color: '{sky.50}',
          inverseColor: '{sky.950}',
          hoverColor: '{sky.100}',
          activeColor: '{sky.200}'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
})

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'p',
      darkModeSelector: false,
      cssLayer: false
    }
  }
})
app.use(pinia)
app.use(i18n)
app.use(PalaceComponents)
app.mount('#app')

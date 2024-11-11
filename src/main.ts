import { createApp } from 'vue'
import App from '@src/App.vue'
import { PalaceComponents } from '@prcomponents/pr-components-library'
import '@prcomponents/pr-components-library/dist/style.css'

import '@assets/styles/index.scss'

// Plugins
import '@plugins/amplify'

// Router
import router from '@src/router'
import { pinia } from '@plugins/pinia'
import { i18n } from '@plugins/i18n/i18n'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)
app.use(PalaceComponents)
app.mount('#app')

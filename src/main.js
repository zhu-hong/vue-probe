import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

import 'virtual:windi.css'

import { VueLazyload } from '../plugin'
import loading from './assets/loading.svg'
import error from './assets/error.svg'


createApp(App)
  .use(router)
  .use(VueLazyload, {
    loading,
    error,
    preload: 1,
  })
  .mount('#app')

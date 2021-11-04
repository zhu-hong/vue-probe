import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

import 'virtual:windi.css'
import './assets/style.css'

import { VueLazyload, VueVirtualScroll } from './plugins'
import loading from './assets/loading.svg'
import error from './assets/error.svg'


createApp(App)
  .use(router)
  .use(VueLazyload, {
    loading,
    error,
    preload: 1,
  })
  .use(VueVirtualScroll)
  .mount('#app')

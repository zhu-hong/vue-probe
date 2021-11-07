import { VueLazyload } from './Lazyload'
import { VueVirtualScroll } from './VirtualScroll'

export {
  VueLazyload,
  VueVirtualScroll,
}

import VirtualScroll from './VirtualScroll/index.vue'

const ZLib = {
  install: (Vue) => {
    Vue.component(VirtualScroll.name, VirtualScroll)
  }
}

export default ZLib
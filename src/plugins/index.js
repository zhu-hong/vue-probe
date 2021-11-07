import { VueLazyload } from './Lazyload'
import { VueVirtualScroll } from './VirtualScroll'
import { VueModal } from './Modal'

export {
  VueLazyload,
  VueVirtualScroll,
  VueModal,
}

import VirtualScroll from './VirtualScroll/index.vue'
import Modal from './Modal/index.vue'

const ZLib = {
  install: (Vue) => {
    Vue.component(VirtualScroll.name, VirtualScroll)
    Vue.component(Modal.name, Modal)
  }
}

export default ZLib
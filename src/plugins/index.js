import { VueLazyload } from './Lazyload'
import { VueVirtualScroll } from './VirtualScroll'
import { VueModal } from './Modal'
import { VueTreeMenu } from './TreeMenu'

export {
  VueLazyload,
  VueVirtualScroll,
  VueModal,
  VueTreeMenu,
}

import VirtualScroll from './VirtualScroll/index.vue'
import Modal from './Modal/index.vue'
import TreeMenu from './TreeMenu/index.vue'
import MenuItem from './TreeMenu/item.vue'
import SubMenu from './TreeMenu/SubMenu.vue'
import ReSubMenu from './TreeMenu/ReSubMenu.vue'

const ZLib = {
  install: (Vue) => {
    Vue.component(VirtualScroll.name, VirtualScroll)
    Vue.component(Modal.name, Modal)
    Vue.component(TreeMenu.name, TreeMenu)
    Vue.component(MenuItem.name, MenuItem)
    Vue.component(SubMenu.name, SubMenu)
    Vue.component(ReSubMenu.name, ReSubMenu)
  }
}

export default ZLib
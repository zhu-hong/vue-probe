import TreeMenu from './index.vue'
import MenuItem from './item.vue'
import SubMenu from './SubMenu.vue'
import ReSubMenu from './ReSubMenu.vue'

export const VueTreeMenu = {
  install: (Vue) => {
    Vue.component(TreeMenu.name, TreeMenu)
    Vue.component(MenuItem.name, MenuItem)
    Vue.component(SubMenu.name, SubMenu)
    Vue.component(ReSubMenu.name, ReSubMenu)
  }
}
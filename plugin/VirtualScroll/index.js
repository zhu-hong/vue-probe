import VirtualScroll from './index.vue'

export const VueVirtualScroll = {
  install: (Vue) => {
    Vue.component(VirtualScroll.name, VirtualScroll)
  }
}
import Selector from './index.vue'

export const VueSelector = {
  install: (Vue) => {
    Vue.component(Selector.name, Selector)
  }
}
import Modal from './index.vue'

export const VueModal = {
  install: (Vue) => {
    Vue.component(Modal.name, Modal)
  }
}
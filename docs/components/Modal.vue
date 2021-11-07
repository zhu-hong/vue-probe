<script>
import { shallowRef } from '@vue/reactivity'

export default {
  name: 'modal',
}
</script>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  header: String,
  content: String,
  showBtns: {
    type: Boolean,
    default: false,
  },
  confirmText: {
    type: String,
    default: '是',
  },
  cancelText: {
    type: String,
    default: '否',
  },
})

const emits = defineEmits(['confirm', 'cancel'])

const modalShow = shallowRef(true)

const handelConfirm = () => {
  modalShow.value = !modalShow.value
  emits('confirm')
}

const handelCancel = () => {
  modalShow.value = !modalShow.value
  emits('cancel')
}
</script>

<template>
  <transition name="modal">
    <div
      v-show="modalShow === show"
      style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, .5); z-index: 9999;"
    >
      <div
        style="position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 350px; background-color: white;"
      >
        <header
          style="padding: 5px 15px; background-color: royalblue; display: flex; justify-content: space-between; align-items: center; color: white;"
        >
          <h1
            style="display: block; max-width: 50%; height: 100%; margin: 0; text-overflow: ellipsis; overflow: hidden; white-space: normal; font-weight: normal; font-size: 1rem;"
          >
            {{ header }}
          </h1>
          <i @click="modalShow = !modalShow" style="font-size: 1.5rem; cursor: pointer;">&times;</i>
        </header>
        <article style="padding: 15px; color: black;">
          <p style="font-weight: normal; margin: 0; font-size: 1rem;">{{ content }}</p>
        </article>
        <div v-if="showBtns" style="display: flex; justify-content: end; margin-bottom: 10px;">
          <button
            @click="handelCancel"
            style="min-width: 40px; margin-right: 15px; padding: 5px 15px; color: white; background-color: brown; outline: none; border: none;"
          >
            {{ cancelText }}
          </button>
          <button
            @click="handelConfirm"
            style="min-width: 40px; margin-right: 15px; padding: 5px 15px; color: white; background-color: royalblue; outline: none; border: none;"
          >
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
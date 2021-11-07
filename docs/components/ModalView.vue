<script setup>
import { shallowRef } from '@vue/reactivity'
import Modal from './Modal.vue'

const modalShow = shallowRef(false)
</script>

<template>
  <Modal
    :show="modalShow"
    header="???"
    content="___________________---------------------"
    :showBtns="true"
  />
  <button style="margin-top: 1rem;" @click="modalShow = ! modalShow">显示一个模态框</button>
</template>

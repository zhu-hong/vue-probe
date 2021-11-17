<script setup>
import { shallowRef } from '@vue/reactivity'
import { menus, selectorData } from './data'

const modalShow = shallowRef(false)

const setOption = (value) => {
  console.log(value)
}
</script>

<template>
  <modal
    :show="modalShow"
    header="????????"
    content="?????????????????????????????"
    :showBtns="true"
  ></modal>
  <button @click="modalShow = !modalShow" class="mb-10">打开一个模态框</button>
  <tree-menu>
    <template v-for="item of menus">
      <menu-item v-if="!item.children">{{ item.title }}</menu-item>
      <re-sub-menu :data="item" v-else></re-sub-menu>
    </template>
  </tree-menu>
  <selector
    style="margin-top: 20px;"
    placeholder="请选择一个框架"
    :options="selectorData"
    @setOption="setOption"
  ></selector>
</template>
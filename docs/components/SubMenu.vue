<script setup>
import { ref } from '@vue/reactivity'

const subMenuShow = ref(false)

const showSubMenu = () => {
  subMenuShow.value = true
}

const hideSubMenu = () => {
  subMenuShow.value = false
}
</script>

<template>
  <div :class="$style.subMenu" @mouseenter="showSubMenu" @mouseleave="hideSubMenu">
    <div :class="$style.title">
      <slot name="title"></slot>
      <span :class="$style.icon">&gt;</span>
    </div>
    <div :class="$style.subItem" v-show="subMenuShow">
      <slot></slot>
    </div>
  </div>
</template>

<style module>
.subMenu {
  position: relative;
  height: 50px;
  cursor: pointer;
}

.title {
  position: relative;
  height: 50px;
  line-height: 50px;
  text-align: center;
  z-index: 999;
}

.icon {
  position: absolute;
  top: 0;
  right: 15px;
}

.subItem {
  position: absolute;
  left: 100%;
  top: 0;
  width: 100%;
  background-color: #333;
}
</style>
<script setup>
import { getCurrentInstance } from '@vue/runtime-core'

defineProps({
  index: Number,
})

const currentIndex = getCurrentInstance().parent.exposed.currentIndex
</script>

<template>
  <transition name="slide">
    <div :class="$style.carouselItem" v-show="index === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<style module>
.carouselItem {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<style>
.slide-leave-active,
.slide-enter-active {
  transition: 0.3s all ease-in-out;
}

.slide-leave-from,
.slide-enter-to {
  transform: translateX(0);
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
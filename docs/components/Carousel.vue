<script setup>
import { ref } from '@vue/reactivity'
import { onBeforeUnmount, onMounted, useSlots } from '@vue/runtime-core'

const props = defineProps({
  initial: {
    type: Number,
    default: 0,
  },
  showDots: {
    type: Boolean,
    default: true,
  },
  showBtns: {
    type: Boolean,
    default: true,
  },
})

const slotsLen = useSlots().default()[0].children.length
const currentIndex = ref(props.initial)
let t = null

const autoplay = () => {
  t = setInterval(() => {
    next()
  }, 3000)
}
const stopAutoplay = () => {
  clearInterval(t)
  t = null
}

const next = () => {
  if (currentIndex.value + 1 >= slotsLen) {
    currentIndex.value = 0
  } else {
    currentIndex.value++
  }
}

const prev = () => {
  if (currentIndex.value - 1 < 0) {
    currentIndex.value = slotsLen - 1
  } else {
    currentIndex.value--
  }
}

const setCurrentIndex = (e) => {
  const _index = e.target.getAttribute('index')
  if (!_index) {
    return
  }
  currentIndex.value = _index - 1
}

const currentDotStyle = {
  backgroundColor: 'rgb(1, 82, 147)',
}

onMounted(() => {
  autoplay()
})
onBeforeUnmount(() => {
  stopAutoplay()
})

defineExpose({
  currentIndex,
})
</script>

<template>
  <div :class="$style.carousel" @mouseenter="stopAutoplay" @mouseleave="autoplay">
    <div :class="$style.inner">
      <slot></slot>
    </div>
    <div :class="$style.dots" @click="setCurrentIndex" v-if="showDots">
      <span v-for="i of slotsLen" :index="i" :style="i - 1 === currentIndex ? currentDotStyle : ''"></span>
    </div>
    <div :class="$style.btns" v-if="showBtns">
      <button @click="prev">&lt;</button>
      <button @click="next">&gt;</button>
    </div>
  </div>
</template>

<style module>
.carousel {
  width: 100%;
  height: 100%;
}
.inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.dots {
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5px;
  background-color: rgba(255, 82, 147, 1);
  border-radius: 20px;
  z-index: 10;
}
.dots > span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
}
.btns {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btns > button {
  border: none;
  outline: none;
  margin: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s linear;
  opacity: 0;
}
.btns > button:hover {
  background-color: rgba(0, 0, 0, 1);
  color: white;
}
.carousel:hover .btns > button {
  opacity: 1;
}
</style>
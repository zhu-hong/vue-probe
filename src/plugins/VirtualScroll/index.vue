<script>
import { computed, ref } from '@vue/reactivity'
import { nextTick } from '@vue/runtime-core'
import { throttle } from '../../shared'

export default {
  name: 'virtual-scroll',
}
</script>

<script setup>
const props = defineProps({
  totalData: {
    type: Array,
    default: [],
  },
  itemHeight: {
    type: Number,
  }
})

const container = ref(null)
const containSize = ref(0)
const startIndex = ref(0)
const endIndex = computed(() => startIndex.value + containSize.value > props.totalData.length - 1 ? props.totalData.length : startIndex.value + containSize.value)
const renderData = computed(() => props.totalData.slice(startIndex.value, endIndex.value))
const fillPadding = computed(() => {
  return {
    padding: `${startIndex.value * props.itemHeight}px 0 ${(props.totalData.length - endIndex.value) * props.itemHeight}px 0`
  }
})

nextTick(() => {
  containSize.value = Math.floor(container.value.offsetHeight / props.itemHeight) + 2
})

const handleScroll = (e) => {
  startIndex.value = Math.floor(e.target.scrollTop / props.itemHeight)
}
</script>

<template>
  <main ref="container" :class="$style.container" @scroll.passive="throttle(handleScroll($event), 300)">
    <div :style="fillPadding">
      <template v-for="data of renderData">
        <slot :data="data"></slot>
      </template>
    </div>
  </main>
</template>

<style module>
.container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
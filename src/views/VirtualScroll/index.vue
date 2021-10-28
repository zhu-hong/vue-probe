<script setup>
import { computed, ref } from '@vue/reactivity'
import { nextTick } from '@vue/runtime-core'

const totalData = ref([])
const container = ref(null)
const itemHeight = 80
const containSize = ref(0)
const startIndex = ref(0)
const endIndex = computed(() => startIndex.value + containSize.value > totalData.value.length - 1 ? totalData.value.length - 1 : startIndex.value + containSize.value)
const renderData = computed(() => totalData.value.slice(startIndex.value, endIndex.value))

const fillPadding = computed(() => {
  return {
    padding: `${startIndex.value * itemHeight}px 0px ${(totalData.value.length - 1 - endIndex.value) * itemHeight}px 0px`,
  }
})

nextTick(() => {
  containSize.value = Math.floor(container.value.offsetHeight / itemHeight) + 2
})

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    totalData.value = [...data, ...data, ...data]
  })

const handleScroll = () => {
  startIndex.value = Math.floor(container.value.scrollTop / itemHeight)
}
</script>

<template>
  <div class="w-100 m-auto h-screen overflow-hidden">
    <main ref="container" class="w-full h-full overflow-y-auto" @scroll.passive="handleScroll">
      <div :style="fillPadding">
        <div class="border-b-4 border-red-500 h-20" v-for="data of renderData">
          <span>
            {{ data.id }}
            <hr />
            {{ data.title }}
          </span>
        </div>
      </div>
    </main>
  </div>
</template>
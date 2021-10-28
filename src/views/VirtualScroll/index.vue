<script setup>
import { ref } from '@vue/reactivity'

const totalData = ref([])

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    totalData.value = data
  })
</script>

<template>
  <div class="w-100 m-auto h-screen overflow-hidden">
    <virtual-scroll :totalData="totalData" :itemHeight="80">
      <template v-slot:default="item">
        <div class="h-20 border-b border-red-500 overflow-hidden">
          {{ item.data.id }}
          <br />
          {{ item.data.title }}
        </div>
      </template>
    </virtual-scroll>
  </div>
</template>
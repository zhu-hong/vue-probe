<script setup>
import imgs from './data'
</script>

<template>
  <div class="h-screen overflow-y-scroll overflow-x-hidden grid grid-cols-4 gap-2 p-2 <sm:grid-cols-3">
    <template v-for="img in imgs" :key="img.eid">
      <img class="h-100 w-full object-cover rounded transition hover:(shadow-2xl cursor-pointer)" v-lazy="img.url" alt="AmberKuo">
    </template>
  </div>
</template>
<script setup>
import imgs from './data'
</script>

<template>
  <div class="h-screen overflow-y-scroll grid gap-2 p-2 grid-cols-4 <md:grid-cols-3 <sm:grid-cols-2">
    <div v-for="img in imgs" :key="img.eid" class="h-100 w-full overflow-hidden rounded">
      <img class="h-full object-cover transition hover:(transform scale-110)" v-lazy="img.url" alt="AmberKuo">
    </div>
  </div>
</template>
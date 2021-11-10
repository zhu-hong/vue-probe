<script>
export default {
  name: 're-sub-menu',
};
</script>

<script setup>
import SubMenu from './SubMenu.vue'
import MenuItem from './MenuItem.vue'

defineProps({
  data: Object,
})
</script>

<template>
  <sub-menu>
    <template #title>{{ data.title }}</template>
    <template v-for="c of data.children" :key="c.id">
      <menu-item v-if="!c.children">{{ c.title }}</menu-item>
      <re-sub-menu 
        v-else 
        :data="c"
      >
      </re-sub-menu>
    </template>
  </sub-menu>
</template>
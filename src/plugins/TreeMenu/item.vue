<script>
export default {
  name: 'menu-item',
}
</script>

<template>
  <div :class="$style.menuItem">
    <slot></slot>
  </div>
</template>

<style module>
.menuItem {
  height: 50px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
</style>
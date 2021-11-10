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
  z-index: 999;
}
</style>
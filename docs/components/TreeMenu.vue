<template>
  <div :class="$style.treeMenu">
    <slot></slot>
  </div>
</template>

<style module>
.treeMenu {
  width: 150px;
  background-color: black;
  color: white;
}
</style>
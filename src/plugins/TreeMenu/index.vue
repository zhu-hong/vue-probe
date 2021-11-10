<script>
export default {
  name: 'tree-menu',
};
</script>


<template>
  <div :class="$style.treeMenu">
    <slot></slot>
  </div>
</template>

<style module>
.treeMenu {
  background-color: black;
  color: white;
}
</style>
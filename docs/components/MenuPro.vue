<script setup>
defineProps({
  options: Array,
  focused: Boolean,
})

const emits = defineEmits(['setOption'])

const handleClick = (option) => {
  emits('setOption', option)
}
</script>

<template>
  <div :class="$style.wrapper" v-show="focused">
    <div :class="$style.item" v-for="option of options" :key="option.id" @click="handleClick(option)" v-show="options.length">
      {{ option.text }}
    </div>
    <div :class="$style.emptyTip" v-show="!options.length">- 无相应数据 -</div>
  </div>
</template>

<style module>
.wrapper {
  position: absolute;
  left: 0;
  top: 48px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  border-radius: 5px;
  cursor: pointer;
}
.item {
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 14px;
  color: #666;
  margin: 10px 0;
  transition: background-color 0.2s linear;
}
.item:hover {
  background-color: #ededed;
}
.emptyTip {
  width: 100%;
  height: 200px;
  text-align: center;
  line-height: 200px;
  color: #666;
}
</style>
<script setup>
import { computed, ref } from '@vue/reactivity'
import InputPro from './InputPro.vue'
import MenuPro from './MenuPro.vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: '请选择...',
  },
  options: {
    type: Array,
    default() {
      retuen[
        {
          id: 0,
          value: 'biubiu',
          text: '发涩',
        }
      ]
    },
  },
})

const emits = defineEmits(['setOption'])

const focused = ref(false)
const inputValue = ref('')
const checkedValue = ref('')

const setOption = (option) => {
  inputValue.value = option.text
  checkedValue.value = option.text
  emits('setOption', option.value)
}

const searchData = computed(() => props.options.filter(option => option.text.toLowerCase().includes(inputValue.value.toLowerCase())))
</script>

<template>
  <div :class="selector.container">
    <input-pro 
      v-model:focused="focused"
      :placeholder="placeholder"
      v-model:inputValue="inputValue"
      :checkedValue="checkedValue"
    >
    </input-pro>
    <menu-pro 
      :options="searchData"
      :focused="focused"
      @setOption="setOption"
    >
    </menu-pro>
  </div>
</template>

<style module="selector">
.container {
  position: relative;
  width: 300px;
}
</style>
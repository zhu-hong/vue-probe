---
title: 下拉搜索框
---

### 按需加载

```javascript
// mian.js
import { createApp } from 'vue'
import App from './App.vue'

import { VueSelector } from './plugins'

createApp(App)
  .use(VueSelector)
  .mount('#app')
```

### 预览

<script setup>
import Selector from '../../components/Selector.vue'

const selectorData = [
  {
    id: 0,
    value: 'js',
    text: 'JavaScript',
  },
  {
    id: 1,
    value: 'vue',
    text: 'Vue.js',
  },
  {
    id: 2,
    value: 'react',
    text: 'React.js',
  },
  {
    id: 3,
    value: 'go',
    text: 'Golang',
  },
  {
    id: 4,
    value: 'node',
    text: 'Node.js',
  },
]

const setOption = (value) => {
  alert(value)
}
</script>

<Selector
  style="margin-top: 20px; z-index: 999;"
  :options="selectorData"
  placeholder="请选择一个框架"
  @setOption="setOption"
/>

### 使用
```vue
<template>
  <Selector
    :options="selectorData"
    placeholder="请选择一个框架"
    @setOption="setOption"
  />
</template>

<script setup>
const selectorData = [
  {
    id: 0,
    value: 'js',
    text: 'JavaScript',
  },
  {
    id: 1,
    value: 'vue',
    text: 'Vue.js',
  },
  {
    id: 2,
    value: 'react',
    text: 'React.js',
  },
  {
    id: 3,
    value: 'go',
    text: 'Golang',
  },
  {
    id: 4,
    value: 'node',
    text: 'Node.js',
  },
]

const setOption = (value) => {
  alert(value)
}
</script>
```

### 参数

| 名称        | 描述               | 类型   | 必填 |
| ----------- | ------------------ | ------ | ---- |
| options     | 下拉菜单的数据集合 | Array  | 否   |
| placeholder | 占位符             | String | 否   |

### 事件

| 名称      | 描述           | 参数            |
| --------- | -------------- | --------------- |
| setOption | 选中一项时触发 | 选中项的`value` |

:::tip

单个`optino`数据格式为对象,包含不重复的`id`,`text`展示的内容,触发`setOption`时的传递的参数`value`

:::
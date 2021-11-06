---
title: '虚拟滚动'
---

### 导入

```javascript
// mian.js
import { createApp } from 'vue'
import App from './App.vue'

import { VueVirtualScroll } from './plugins'

createApp(App)
  .use(VueVirtualScroll)
  .mount('#app')
```

### 使用

```vue
<template>
  <div style="width: 400px; margin: auto; height: 100vh; overflow: hidden;">
    <virtual-scroll :totalData="totalData" :itemHeight="80">
      <template v-slot:default="item">
        <div style="height: 80px; border-bottom: 1px solid black">
          {{ item.data.id }}
          <br />
          {{ item.data.title }}
        </div>
      </template>
    </virtual-scroll>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'

const totalData = ref([])

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    totalData.value = data
  })
</script>
```

### 参数

| 名称       | 描述                   | 类型   | 必填 |
| ---------- | ---------------------- | ------ | ---- |
| totalData  | 需要展示的数据         | Array  | 是   |
| itemHeight | 放置单个数据容器的高度 | Number | 是   |

### 注意

::: warning

+ 需要一个容器将虚拟滚动组件包裹且设置一个固定高度超出部分隐藏
+ 插槽作用域的`data`为组件参数`totalData`的子项

:::

### 预览

<script setup>
import { ref } from '@vue/reactivity'
import VirtualScroll from '../../components/VirtualScroll.vue'

const totalData = ref([])

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    totalData.value = data
  })
</script>


<div style="width: 100%; margin: auto; height: 100vh; overflow: hidden;">
  <virtual-scroll :totalData="totalData" :itemHeight="80">
    <template v-slot:default="item">
      <div style="height: 80px; border-bottom: 1px solid black;">
        {{ item.data.id }}
        <br />
        {{ item.data.title }}
      </div>
    </template>
  </virtual-scroll>
</div>
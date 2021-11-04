---
title: '虚拟滚动'
---

### 按需加载

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

<template>
  <div class="w-100 m-auto h-screen overflow-hidden">
    <virtual-scroll :totalData="totalData" :itemHeight="80">
      <template v-slot:default="item">
        <div class="h-20 border-b border-red-500 overflow-hidden">
          {{ item.data.id }}
          <br />
          {{ item.data.title }}
        </div>
      </template>
    </virtual-scroll>
  </div>
</template>
```

### 参数

| 名称       | 描述                   | 类型   | 必填 |
| ---------- | ---------------------- | ------ | ---- |
| totalData  | 需要展示的数据         | Array  | 是   |
| itemHeight | 放置单个数据容器的高度 | Number | 是   |

### 注意

::: warning

+ 需要一个容器将虚拟滚动组件包裹且设置一个固定高度
+ 插槽作用域的`data`为`totalData`的子项

:::

### 预览

> https://rc-zh.vercel.app/

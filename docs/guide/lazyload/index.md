---
title: 图片懒加载
---

### 导入

```javascript
// mian.js
import { createApp } from 'vue'
import App from './App.vue'

import { VueLazyload } from './plugins'
import loading from './assets/loading.svg'
import error from './assets/error.svg'


createApp(App)
  .use(router)
  .use(VueLazyload, {
    loading,
    error,
    preload: 1,
  })
  .mount('#app')
```

### 使用

在需要懒加载图片上添加属性`v-lazy`即可,属性值为图片地址
```vue{6}
<template>
  <div class="h-screen overflow-y-scroll grid gap-2 p-2 grid-cols-4 <md:grid-cols-3 <sm:grid-cols-2">
    <div v-for="img in imgs" :key="img.eid" class="h-100 w-full overflow-hidden rounded">
      <img 
        class="h-full w-full object-cover transition hover:(transform scale-110)" 
        v-lazy="img.url" 
        alt="AmberKuo">
    </div>
  </div>
</template>

<script setup>
import imgs from './data'
</script>
```

### 配置参数

| 名称    | 描述                   | 类型     | 必填 |
| ------- | ---------------------- | -------- | ---- |
| loading | 图片加载时显示的图片   | 图片地址 | 否   |
| error   | 图片加载失败显示的图片 | 图片地址 | 否   |
| preload | 图片加载临界值的倍数   | Number   | 否   |

:::warning

添加了`v-lazy`懒加载的图片需要有一个拥有`overflow/overflow-y: scroll/auto`的父容器

:::

### 预览

> https://vue-probe.vercel.app/#/lazyload
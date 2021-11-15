---
title: 轮播图
---

### 按需导入

```javascript
// mian.js
import { createApp } from 'vue'
import App from './App.vue'

import { VueCarousel } from './plugins'

createApp(App)
  .use(VueCarousel)
  .mount('#app')

```

### 预览

<script setup>
import Carousel from '../../components/Carousel.vue'
import CarouselItem from '../../components/CarouselItem.vue'
</script>

<div class="container">
  <carousel>
    <template v-for="(s, i) of 5">
      <carousel-item :index="i">
        <img src="https://sdfsdf.dev/300x200.png" alt="carousel-images" class="carusel-img" />
      </carousel-item>
    </template>
  </carousel>
</div>

<style>
.container {
  width: 600px;
  height: 350px;
  position: relative;
  margin-top: 20px;
}
.carusel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

### 使用
```vue
<template>
  <div :class="$style.container">
    <carousel>
      <template v-for="(s, i) of 5">
        <carousel-item :index="i">
          <img src="https://sdfsdf.dev/300x200.png" alt="carousel-images" :class="$style.caruselImg" />
        </carousel-item>
      </template>
    </carousel>
  </div>
</template>

<style module>
.container {
  width: 600px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.caruselImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
```

### 参数

#### carousel

| 名称     | 描述           | 类型    | 必填 |
| -------- | -------------- | ------- | ---- |
| initial  | 初始化展示索引 | Number  | 否   |
| showDots | 显示小圆点     | Boolean | 否   |
| showBtns | 显示左右按钮   | Boolean | 否   |

#### carousel-item

| 名称  | 描述     | 类型   | 必填 |
| ----- | -------- | ------ | ---- |
| index | 轮播顺序 | Number | 是   |

:::warning

`carousel-item`组件的`index`参数必须从零开始不断层不得重复,建议直接`v-for`取index做参数

:::
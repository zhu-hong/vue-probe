---
title: 模态框
---

## 按需导入

```javascript
// mian.js
import { createApp } from 'vue'
import App from './App.vue'

import { VueModal } from './plugins'

createApp(App)
  .use(VueModal)
  .mount('#app')
```

## 使用

```vue
<template>
  <modal
    :show="modalShow"
    header="???"
    content="___________________---------------------"
    :showBtns="true"
  ></modal>

  <button @click="modalShow = !modalShow">打开一个模态框</button>
</template>

<script setup>
import { shallowRef } from '@vue/reactivity';

const modalShow = shallowRef(false)
</script>
```

## 预览

<script setup>
import ModalView from '../../components/ModalView.vue'
</script>

<ModalView/>

## 参数

| 名称        | 描述             | 类型    | 必填 |
| ----------- | ---------------- | ------- | ---- |
| show        | 模态框的显示隐藏 | Boolean | 是   |
| header      | 头部文字         | String  | 否   |
| content     | 主题文字         | String  | 否   |
| showBtns    | 按钮组的显示隐藏 | Boolean | 否   |
| confirmText | 确认按钮文字     | String  | 否   |
| cancelText  | 取消按钮文字     | String  | 否   |

## 事件

| 名称    | 描述               |
| ------- | ------------------ |
| confirm | 点击确认按钮的事件 |
| cancel  | 点击取消按钮的事件 |
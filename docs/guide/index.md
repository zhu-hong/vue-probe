### 介绍

没有使用任何第三方工具库，使用纯`js`和`Vue`造轮子，来提高编程水平

### 获取

```bash
git clone https://github.com/zhu-hong/vue-probe.git

cd vue-probe

npm install

npm run dev
```

### 使用

#### 完整引入

```Javascript
import { createApp } from 'vue'
import App from './App.vue'

import ZLib from './plugins'

createApp(App)
  .use(ZLib)
  .mount('#app')
```

:::tip
完整引入仅适用于组件,插件请使用按需引入
:::

#### 按需引入

请在各组件/插件详情中查看

### 目录结构

```{3-5}
├───docs // 文档
└───src
    ├───plugins // 核心源码
    │   ├───Lazyload
    │   └───VirtualScroll
    └───shared // 公共工具函数库
```

### 查看源码

> 建议使用[Github1s](https://github1s.com/zhu-hong/vue-probe/)
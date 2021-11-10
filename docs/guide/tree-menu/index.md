---
title: 无限多级菜单
---

### 按需导入

```javascript
// mian.js
import { createApp } from 'vue'
import App from './App.vue'

import { VueTreeMenu } from './plugins'

createApp(App)
  .use(VueTreeMenu)
  .mount('#app')
```

### 预览

<script setup>
import TreeMenu from '../../components/TreeMenu.vue'
import MenuItem from '../../components/MenuItem.vue'
import ReSubMenu from '../../components/ReSubMenu.vue'
const menus = [
  {
    id: 1,
    title: '菜单1',
  },
  {
    id: 2,
    title: '菜单2',
  },
  {
    id: 3,
    title: '菜单3',
    children: [
      {
        id: 31,
        title: '菜单3-1',
      },
      {
        id: 32,
        title: '菜单3-2',
      },
      {
        id: 33,
        title: '菜单3-3',
        children: [
          {
            id: 331,
            title: '菜单3-3-1',
          },
          {
            id: 332,
            title: '菜单3-3-3',
          },
          {
            id: 333,
            title: '菜单3-3-3',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: '菜单4',
  },
  {
    id: 5,
    title: '菜单5',
    children: [
      {
        id: 51,
        title: '菜单5-1',
      },
      {
        id: 52,
        title: '菜单5-2',
        children: [
          {
            id: 521,
            title: '菜单5-2-1',
          },
          {
            id: 522,
            title: '菜单5-2-2',
            children: [
              {
                id: 5221,
                title: '菜单5-2-2-1',
                children: [
                  {
                    id: 52211,
                    title: '菜单5-2-2-1-1',
                  },
                ],
              },
              {
                id: 5222,
                title: '菜单5-2-2-2',
              },
            ],
          },
          {
            id: 523,
            title: '菜单5-2-3',
          },
        ],
      },
      {
        id: 53,
        title: '菜单5-3',
      },
    ],
  },
]
</script>

<tree-menu>
  <template v-for="item of menus">
    <menu-item v-if="!item.children">
      {{ item.title }}
    </menu-item>
    <re-sub-menu :data="item" v-else></re-sub-menu>
  </template>
</tree-menu>

### 使用

```vue
<template>
  <tree-menu>
    <template v-for="item of menus">
      <menu-item v-if="!item.children">
        {{ item.title }}
      </menu-item>
      <re-sub-menu :data="item" v-else></re-sub-menu>
    </template>
  </tree-menu>
</template>

<script setup>
const menus = [
  {
    id: 1,
    title: '菜单1',
  },
  {
    id: 2,
    title: '菜单2',
  },
  {
    id: 3,
    title: '菜单3',
    children: [
      {
        id: 31,
        title: '菜单3-1',
      },
      {
        id: 32,
        title: '菜单3-2',
      },
      {
        id: 33,
        title: '菜单3-3',
        children: [
          {
            id: 331,
            title: '菜单3-3-1',
          },
          {
            id: 332,
            title: '菜单3-3-3',
          },
          {
            id: 333,
            title: '菜单3-3-3',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: '菜单4',
  },
  {
    id: 5,
    title: '菜单5',
    children: [
      {
        id: 51,
        title: '菜单5-1',
      },
      {
        id: 52,
        title: '菜单5-2',
        children: [
          {
            id: 521,
            title: '菜单5-2-1',
          },
          {
            id: 522,
            title: '菜单5-2-2',
            children: [
              {
                id: 5221,
                title: '菜单5-2-2-1',
                children: [
                  {
                    id: 52211,
                    title: '菜单5-2-2-1-1',
                  },
                ],
              },
              {
                id: 5222,
                title: '菜单5-2-2-2',
              },
            ],
          },
          {
            id: 523,
            title: '菜单5-2-3',
          },
        ],
      },
      {
        id: 53,
        title: '菜单5-3',
      },
    ],
  },
]
</script>
```

+ `tree-menu` => 菜单根组件组件
+ `menu-item` => 无子菜单项组件
+ `sub-menu` => 含子菜单项组件
+ `re-sub-menu` => 自动递归加载所有子菜单组件
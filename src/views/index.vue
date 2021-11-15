<script setup>
const examples = [
  {
    title: '图片懒加载',
    path: '/lazyload',
  },
  {
    title: '虚拟滚动',
    path: '/virtual-scroll',
  },
  {
    title: '一般组件',
    path: '/ordinary',
  },
  {
    title: '轮播图',
    path: '/carousel',
  },
]
</script>

<template>
  <main class="grid place-items-center min-w-screen min-h-screen relative bg-gradient-to-br from-dark-900 to-black">
    <a href="https://docs-vue-probe.vercel.app/" class="absolute top-10 right-10 text-white font-bold text-2xl tracking-2px">文档</a>
    <div class="bg-dark-800 rounded-md p-12">
      <ul class="w-full grid gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <template v-for="example of examples">
          <li class="m-0 p-0 list-none bg-gradient-to-br from-blue-700 to-pink-500 rounded-md">
            <router-link
              :to="example.path"
              class="block text-white shadow-md no-underline text-left text-lg py-4 px-8 text-center m-1 bg-black rounded-md w-64 overflow-ellipsis overflow-hidden whitespace-normal"
            >
              {{ example.title }}
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>
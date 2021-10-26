import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/index.vue'),
      meta: {
        title: 'Vue-Plugin',
      },
    },
    {
      path: '/lazyload',
      component: () => import('../views/Lazyload/index.vue'),
      meta: {
        title: 'Lazyload',
      },
    },
  ],
  history: createWebHistory(),
})

router.beforeEach((to) => {
  document.title = to.meta?.title
})

export default router
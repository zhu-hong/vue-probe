import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/lazyload',
      component: () => import('../views/Lazyload/index.vue'),
    },
  ],
  history: createWebHistory(),
})

export default router
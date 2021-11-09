import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/lazyload',
      component: () => import('../views/Lazyload/index.vue'),
      meta: {
        title: 'Lazyload',
      },
    },
    {
      path: '/virtual-scroll',
      component: () => import('../views/VirtualScroll/index.vue'),
      meta: {
        title: 'VirtualScroll',
      },
    },
    {
      path: '/ordinary',
      component: () => import('../views/ordinary/index.vue'),
      meta: {
        title: 'ordinary',
      },
    },
  ],
  history: createWebHashHistory(),
})

router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
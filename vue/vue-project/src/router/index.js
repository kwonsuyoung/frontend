import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/component',
      component: () => import('@/views/component.vue'),
      meta: { menuName: '컴포넌트', isMenu: true },
    },
    {
      path: '/page94',
      component: () => import('@/views/page94.vue'),
      meta: { isMenu: true },
    },
    {
      path: '/page98',
      component: () => import('@/views/page98.vue'),
      meta: { isMenu: true },
    },
    {
      path: '/page103',
      component: () => import('@/views/page103.vue'),
      meta: { isMenu: true },
    },
    {
      path: '/page108',
      component: () => import('@/views/page108.vue'),
      meta: { isMenu: true },
    },
    {
      path: '/page110',
      component: () => import('@/views/page110.vue'),
      meta: { isMenu: true },
    },
    {
      path: '/page114',
      component: () => import('@/views/page114.vue'),
      meta: { isMenu: true },
    },
    {
      path: '/page118',
      component: () => import('@/views/page118.vue'),
      meta: { isMenu: true },
    },
    {
      path: '/page123',
      component: () => import('@/views/page123.vue'),
      meta: { isMenu: true },
    },
    {
      path: '/page125',
      component: () => import('@/views/page125.vue'),
      meta: { isMenu: true },
    },
    {
      path: '/mission01',
      component: () => import('@/views/mission01.vue'),
      meta: { isMenu: true },
    },
  ],
});

export default router

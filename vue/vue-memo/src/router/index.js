import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import Form from '@/views/Form.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/memos/add',
      // component: () => import('@/views/Form.vue'),
      component: Form,
    },
    {
      path: '/memos/:id', // PathVariable 경로변수
      // :id라는 데이터를 가져올 수 있음
      component: Form,
    },
  ],
});

export default router

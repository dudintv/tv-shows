import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/views/DashboardPage.vue') },
    { path: '/shows/:id', component: () => import('@/views/ShowDetailsPage.vue') },
    { path: '/search', component: () => import('@/views/SearchPage.vue') },
  ],
});

export default router;

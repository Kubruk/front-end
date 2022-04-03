import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('@home/HomePage.vue') },
  { path: '/about', component: () => import('@about/AboutPage.vue') }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes
});

export default router;

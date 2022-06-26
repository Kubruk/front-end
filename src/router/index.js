import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('@home/HomePage.vue') },
  { path: '/login', component: () => import('@auth/LoginPage.vue') },
  { path: '/sign-up', component: () => import('@auth/SignUpPage.vue') }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes
});

export default router;

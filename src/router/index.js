import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { name: 'home', path: '/', component: () => import('@home/HomePage.vue') },
  {
    name: 'login',
    path: '/login',
    component: () => import('@auth/LoginPage.vue')
  },
  {
    name: 'sign-up',
    path: '/sign-up',
    component: () => import('@auth/SignUpPage.vue')
  }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes
});

export default router;

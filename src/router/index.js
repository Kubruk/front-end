import { createRouter, createWebHistory } from 'vue-router';
import { auth } from './auth';
import { user } from './user';

const routes = [
  { name: 'home', path: '/', component: () => import('@home/HomePage.vue') },
  ...auth,
  ...user
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes
});

export default router;

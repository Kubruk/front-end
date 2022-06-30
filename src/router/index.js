import { createRouter, createWebHistory } from 'vue-router';
import { auth } from './auth';
import { users } from './users';

const routes = [
  { name: 'home', path: '/', component: () => import('@home/HomePage.vue') },
  ...auth,
  ...users
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes
});

export default router;

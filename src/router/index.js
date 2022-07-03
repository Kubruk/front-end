import { createRouter, createWebHistory } from 'vue-router';
import { auth } from './auth';
import { users } from './users';
import { books } from './books';

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@home/HomePage.vue'),
    beforeEnter: (to, from, next) => {
      // reject the navigation
      next();
    }
  },
  ...auth,
  ...users,
  ...books
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes
});

export default router;

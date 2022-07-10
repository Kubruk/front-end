import { createRouter, createWebHistory } from 'vue-router';
import { auth } from './auth';
import { users } from './users';
import { books } from './books';
import { userStore } from '@/stores/user';

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@home/HomePage.vue'),
    beforeEnter: async (to, from, next) => {
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

router.beforeEach(async () => {
  const { checkAuthToken } = userStore();
  await checkAuthToken();
});

export default router;

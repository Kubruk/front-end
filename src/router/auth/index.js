export const auth = [
  {
    name: 'login',
    path: '/auth/login',
    component: () => import('@auth/LoginPage.vue')
  },
  {
    name: 'sign-up',
    path: '/auth/sign-up',
    component: () => import('@auth/SignUpPage.vue')
  }
];

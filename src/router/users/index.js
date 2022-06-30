export const users = [
  {
    name: 'user-profile',
    path: '/users/:id',
    component: () => import('@users/ProfilePage.vue'),
    props: true
  }
];

export const users = [
  {
    name: 'user-profile',
    path: '/user/profile/:id',
    component: () => import('@users/ProfilePage.vue'),
    props: true
  }
];

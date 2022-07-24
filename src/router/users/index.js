export const users = [
  {
    name: 'user',
    path: '/user/:id',
    component: () => import('@components/EmptyRoute.vue'),
    props: true,
    children: [
      {
        name: 'profile',
        path: 'profile',
        component: () => import('@users/profile/UserProfile.vue'),
        props: true
      }
    ]
  }
];

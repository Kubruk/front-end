export const users = [
  {
    name: 'user',
    path: '/user/:id',
    component: () => import('@users/UserPage.vue'),
    props: true,
    children: [
      {
        name: 'profile',
        path: 'profile',
        component: () => import('@users/profile/UserProfile.vue'),
        props: true
      },
      {
        name: 'bruks',
        path: 'bruks',
        component: () => import('@users/bruks/UserBruks.vue'),
        props: true
      }
    ]
  }
];

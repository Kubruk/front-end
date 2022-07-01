export const books = [
  {
    name: 'book-profile',
    path: '/books/:id',
    component: () => import('@books/BookPage.vue'),
    props: true
  }
];

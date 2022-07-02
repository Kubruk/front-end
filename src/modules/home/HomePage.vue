<template>
  <main class="main-page md:grid">
    <BookShelf :books="books" />
  </main>
</template>

<script setup>
import api from '@helpers/api';
import { ref, onBeforeMount, defineAsyncComponent } from 'vue';

const BookShelf = defineAsyncComponent(() =>
  import('@components/Bookshelf.vue')
);

const books = ref([]);

onBeforeMount(async () => {
  await api.get('/books', {
    onSuccess: (data) => {
      books.value = data.books;
    }
  });
});
</script>

<style lang="scss" scoped></style>

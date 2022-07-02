<template>
  <main class="main-page md:grid">
    <BookShelf :books="books" />
  </main>
</template>

<script setup>
import axios from 'axios';
import { ref, onBeforeMount, defineAsyncComponent } from 'vue';
import { loadingStore } from '@/stores/loading';

const BookShelf = defineAsyncComponent(() =>
  import('@components/Bookshelf.vue')
);

const loading = loadingStore();

const books = ref([]);

onBeforeMount(async () => {
  loading.setLoading(true);

  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books`);
    books.value = data.books;
  } catch (error) {
    console.error(error);
  } finally {
    loading.setLoading(false);
  }
});
</script>

<style lang="scss" scoped></style>

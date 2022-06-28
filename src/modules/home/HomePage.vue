<template>
  <main class="main-page md:grid">
    <BookShelf :books="books" />
  </main>
</template>

<script setup>
import BookShelf from '@components/Bookshelf.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { loadingStore } from '@/stores/loading';

const loading = loadingStore();

const books = ref([]);
onMounted(async () => {
  loading.setLoading(true);

  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books`);
    books.value = data.books;
  } catch (error) {
  } finally {
    loading.setLoading(false);
  }
});
</script>

<style lang="scss" scoped>
@use '@styles/home/home.module.scss';
</style>

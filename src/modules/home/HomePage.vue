<template>
  <main class="main-page md:grid">
    <BookShelf :books="books" />
  </main>
</template>

<script setup>
import BookShelf from '@components/Bookshelf.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const books = ref([]);
onMounted(() => {
  axios
    .get(`${import.meta.env.VITE_API_URL}/books`)
    .then(({ data }) => (books.value = data.books));
});
</script>

<style lang="scss" scoped>
@use '@styles/home/home.module.scss';
</style>

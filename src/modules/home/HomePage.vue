<template>
  <main class="main-page md:flex md:items-center md:justify-center">
    <BookCard
      v-for="book in books"
      :key="book.title"
      :title="book.title"
      :description="book.description"
      :cover="book.cover"
    />
  </main>
</template>

<script setup>
import BookCard from '@components/BookCard.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const books = ref([]);
onMounted(() => {
  axios
    .get('https://kubruk-back.herokuapp.com/api/books')
    .then(({ data }) => (books.value = data.books));
});
</script>

<style lang="scss" scoped>
@use '@styles/home/home.module.scss';
</style>

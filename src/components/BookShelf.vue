<template>
  <div v-if="books" class="h-1/2 grid-cols-5 grid-rows-2">
    <BookCard
      v-for="book in books"
      :key="book.title"
      :title="book.title"
      :description="book.description"
      :cover="book.cover"
    />
  </div>
</template>

<script>
import BookCard from '@components/BookCard.vue';

export default {
  name: 'BookShelf',
  components: { BookCard },
  props: {
    books: {
      type: Array,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div
    v-if="books"
    class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-2 p-8"
  >
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

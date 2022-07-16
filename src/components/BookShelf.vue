<template>
  <div
    v-if="books"
    class="w-full grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 p-8"
  >
    <BookCard
      v-for="book in books"
      :key="book.title"
      :book-id="book.id"
      :title="book.title"
      :description="book.description"
      :cover="book.cover"
      :author="book.author"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const BookCard = defineAsyncComponent(() => import('@components/BookCard.vue'));

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

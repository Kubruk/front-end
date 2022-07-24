<template>
  <div>
    <BookShelf v-if="books.length" :books="books" />
    <span v-else>{{ $t('user.bruks.noBruks') }}</span>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const BookShelf = defineAsyncComponent(() =>
  import('@components/Bookshelf.vue')
);

const props = defineProps({
  books: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped></style>

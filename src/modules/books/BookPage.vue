<template>
  <div v-if="book && book.author">
    <h3 class="p-8 text-3xl font-bold font-mono">
      {{ book.title }} by {{ book.author.name }}
    </h3>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, defineAsyncComponent } from 'vue';
import api from '@helpers/api';

const BookShelf = defineAsyncComponent(() =>
  import('@components/Bookshelf.vue')
);

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
});

const book = ref([]);

onBeforeMount(async () => {
  await api.get(`/books/${props.id}`, {
    onSuccess: (data) => {
      book.value = data.book;
    }
  });
});
</script>

<style lang="scss" scoped></style>

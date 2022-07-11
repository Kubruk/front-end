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
import { loadingStore } from '@/stores/loading';

const loading = loadingStore();

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
  const loadingStatus = 'get-book';
  loading.setLoading(loadingStatus);
  await api.get(`/books/${props.id}`, {
    onSuccess: (data) => {
      book.value = data.book;
    }
  });
  loading.unsetLoading(loadingStatus);
});
</script>

<style lang="scss" scoped></style>

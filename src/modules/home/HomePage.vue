<template>
  <main class="main-page md:flex items-stretch">
    <SideBar />
    <BookShelf :books="books" />
  </main>
</template>

<script setup>
import api from '@helpers/api';
import { ref, onBeforeMount, defineAsyncComponent } from 'vue';
import { loadingStore } from '@/stores/loading';

const BookShelf = defineAsyncComponent(() =>
  import('@components/Bookshelf.vue')
);
const SideBar = defineAsyncComponent(() => import('@layout/SideBar.vue'));

const loading = loadingStore();

const books = ref([]);

onBeforeMount(async () => {
  const loadingStatus = 'get-books';
  loading.setLoading(loadingStatus);
  await api.get('/books', {
    onSuccess: (data) => {
      books.value = data.books;
    }
  });
  loading.unsetLoading(loadingStatus);
});
</script>

<style lang="scss" scoped></style>

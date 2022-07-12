<template>
  <main class="main-page md:flex">
    <SideBar v-if="isLogged" />
    <BookShelf :books="books" />
  </main>
</template>

<script setup>
import api from '@helpers/api';
import { ref, onBeforeMount, defineAsyncComponent } from 'vue';
import { loadingStore } from '@/stores/loading';
import { userStore } from '@/stores/user';
const BookShelf = defineAsyncComponent(() =>
  import('@components/Bookshelf.vue')
);
const SideBar = defineAsyncComponent(() => import('@layout/SideBar.vue'));

const { isLogged } = userStore();

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

<template>
  <div v-if="user">
    <h3 class="p-8 text-3xl font-bold font-mono">{{ user.name }} profile</h3>
    <BookShelf :books="books" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { loadingStore } from '@/stores/loading';
import axios from 'axios';

const BookShelf = defineAsyncComponent(() =>
  import('@components/Bookshelf.vue')
);

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
});
const loading = loadingStore();

const user = ref(null);
const books = ref([]);

onBeforeMount(async () => {
  loading.setLoading(true);

  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/users/${props.id}`
    );
    user.value = data.user;
    books.value = data.books;
  } catch (error) {
    console.error(error);
  } finally {
    loading.setLoading(false);
  }
});
</script>

<style lang="scss" scoped></style>

<template>
  <div v-if="user">
    <h3 class="p-8 text-3xl font-bold font-mono">{{ book.title }} profile</h3>
  </div>
</template>

<script setup>
import BookShelf from '@components/Bookshelf.vue';
import { ref, onBeforeMount } from 'vue';
import { loadingStore } from '@/stores/loading';
import axios from 'axios';

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
});
const loading = loadingStore();

const book = ref([]);

onBeforeMount(async () => {
  loading.setLoading(true);

  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/books/${props.id}`
    );
    book.value = data.book;
  } catch (error) {
    console.error(error);
  } finally {
    loading.setLoading(false);
  }
});
</script>

<style lang="scss" scoped></style>

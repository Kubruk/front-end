<template>
  <div v-if="user">
    <h3 class="p-8 text-3xl font-bold font-mono">
      {{ $t('user.profileTitle', { msg: user.name }) }}
    </h3>
    <BookShelf :books="books" />
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

const user = ref(null);
const books = ref([]);

onBeforeMount(async () => {
  await api.get(`/users/${props.id}`, {
    onSuccess: (data) => {
      user.value = data.user;
      books.value = data.books;
    }
  });
});
</script>

<style lang="scss" scoped></style>

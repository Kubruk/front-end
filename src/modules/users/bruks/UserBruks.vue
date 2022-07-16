<template>
  <div>
    <BookShelf v-if="books.length" :books="books" />
    <span v-else>{{ $t('user.bruks.noBruks') }}</span>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { ref, onBeforeMount } from 'vue';
import api from '@helpers/api';
import { storeToRefs } from 'pinia';
import { userStore } from '@/stores/user';

const BookShelf = defineAsyncComponent(() =>
  import('@components/Bookshelf.vue')
);
const props = defineProps({
  id: {
    type: String,
    default: ''
  }
});

const userSt = userStore();
const { books } = storeToRefs(userSt);

onBeforeMount(async () => {
  userSt.getBooks();
});
</script>

<style lang="scss" scoped></style>

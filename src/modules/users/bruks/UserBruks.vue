<template>
  <div>
    <h3 class="p-8 text-3xl font-bold font-mono">
      {{ $t('user.bruksTitle', { msg: user.name }) }}
    </h3>
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
const { books, user } = storeToRefs(userSt);

onBeforeMount(async () => {
  userSt.getBooks();
});
</script>

<style lang="scss" scoped></style>

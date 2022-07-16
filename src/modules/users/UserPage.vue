<template>
  <div v-if="user">
    <h3 class="p-8 text-3xl font-bold font-mono">
      {{ $t('user.profileTitle', { msg: user.name }) }}
    </h3>
    <router-view :books="books" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { userStore } from '@/stores/user';

const userSt = userStore();
const { user } = storeToRefs(userSt);
</script>

<style lang="scss" scoped></style>

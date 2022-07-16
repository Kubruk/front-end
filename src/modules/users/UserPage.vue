<template>
  <div v-if="user">
    <router-view />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { userStore } from '@/stores/user';

const userSt = userStore();
const { user } = storeToRefs(userSt);
</script>

<style lang="scss" scoped></style>

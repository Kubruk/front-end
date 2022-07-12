<template>
  <div class="p-4 bg-white w-1/6">
    <span v-if="isLogged">{{ user.name }}</span>
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user';

const { user, isLogged } = userStore();
</script>

<style lang="scss" scoped></style>

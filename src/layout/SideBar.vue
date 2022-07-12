<template>
  <div class="p-4 bg-white w-1/6">{{ user.name }}</div>
</template>

<script setup>
import { userStore } from '@/stores/user';

const { user } = userStore();
</script>

<style lang="scss" scoped></style>

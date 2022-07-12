<template>
  <div>
    <div
      v-if="isLoading"
      style="width: 100%"
      class="absolute top-0 h-4 shim-green"
    />
    <div v-else class="absolute top-0 h-4" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { loadingStore } from '@/stores/loading';

const loading = loadingStore();
const { isLoading } = storeToRefs(loading);
</script>

<style lang="css" scoped>
.shim-green {
  position: relative;
  overflow: hidden;
  background: rgb(57, 62, 70);
  background: linear-gradient(
    90deg,
    rgba(57, 62, 70, 1) 0%,
    rgba(9, 120, 121, 1) 50%,
    rgba(255, 198, 44, 1) 100%
  );
}
.shim-green::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(9, 120, 121, 1) 0%,
    rgba(255, 198, 44, 1) 50%,
    rgba(57, 62, 70, 1) 100%
  );
  animation: shimmer 2s ease-out infinite;
  content: '';
}

@keyframes shimmer {
  100% {
    transform: translateX(0%);
    opacity: 0;
  }
}
</style>

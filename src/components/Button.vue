<template>
  <button
    class="px-4 py-2 font-semibold rounded-md"
    :class="{ 'bg-sunglow': !ghost, 'text-bright-gray': !ghost }"
  >
    {{ name }}
  </button>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  ghost: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped></style>

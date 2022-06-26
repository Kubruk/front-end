<template>
  <div class="bg-white rounded-lg w-2/6 p-8 shadow-sm">
    <h2 class="text-3xl mb-4">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped></style>

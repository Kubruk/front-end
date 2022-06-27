<template>
  <div
    class="bg-white border rounded-lg shadow-sm mb-4 md:mb-0 place-self-center w-full"
  >
    <h2
      class="text-3xl p-4 bg-bright-gray text-alabaster-400 text-ellipsis break-all whitespace-nowrap overflow-hidden"
    >
      {{ title }}
    </h2>
    <div class="flex h-60">
      <img
        :src="cover"
        :alt="title"
        class="object-cover w-1/5 md:w-1/3 h-full"
      />
      <div class="p-4 h-full overflow-hidden">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  cover: {
    type: String,
    default: ''
  }
});
</script>

<style lang="scss" scoped></style>

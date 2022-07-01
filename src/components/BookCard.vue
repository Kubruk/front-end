<template>
  <div
    class="bg-white border rounded-lg shadow-sm mb-4 md:mb-0 place-self-center w-full"
  >
    <router-link :to="`/books/${bookId}`">
      <h2
        class="text-3xl p-4 bg-bright-gray text-alabaster-400 text-ellipsis break-all whitespace-nowrap overflow-hidden"
      >
        <i class="icofont-book-alt"></i>
        {{ title }}
      </h2>
    </router-link>

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
    <div
      v-if="author"
      class="text-3xl p-4 bg-bright-gray text-alabaster-400 text-ellipsis break-all whitespace-nowrap overflow-hidden"
    >
      <router-link :to="`/users/${author._id}`">
        {{ author.name }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  author: {
    type: [Object, String],
    default: () => {}
  },
  bookId: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped></style>

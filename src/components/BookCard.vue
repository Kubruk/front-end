<template>
  <div class="bg-white rounded-lg p-8 shadow-sm m-4">
    <h2 class="text-3xl pb-4">{{ title }}</h2>
    <div class="flex">
      <img :src="portrait" :alt="title" class="h-96 w-60" />
      <div class="pl-4 text-ellipsis overflow-hidden w-64">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    portrait: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped></style>

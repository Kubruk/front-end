<template>
  <form
    class="bg-white rounded-lg w-2/6 p-8 shadow-sm"
    @submit.prevent="onSubmit"
  >
    <h2 class="text-3xl mb-4">{{ title }}</h2>
    <div class="flex flex-col align-center justify-center mb-4">
      <slot name="content" />
    </div>
    <div class="flex justify-end pt-4">
      <slot name="footer" />
    </div>
  </form>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    onSubmit: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped></style>

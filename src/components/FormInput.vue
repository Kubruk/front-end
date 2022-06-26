<template>
  <div class="flex justify-between align-center py-2">
    <label class="w-2/6 font-semibold">{{ label }}</label>
    <input
      class="w-4/6 border border-alabaster-500 border-solid p-1"
      :type="type"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
};
</script>

<style lang="scss" scoped></style>

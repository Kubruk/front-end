<template>
  <div class="py-2">
    <label class="w-full font-semibold block">{{ label }}</label>
    <input
      :name="name"
      class="block w-full border border-alabaster-500 border-solid p-1"
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
    },
    name: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <button
    :disabled="disabled"
    :type="type"
    class="px-4 py-2 font-semibold rounded-md"
    :class="classes"
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
  primary: {
    type: Boolean,
    default: false
  },
  cta: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: null
  }
});

const classes = {
  'bg-sunglow': props.cta,
  'text-bright-gray': props.cta,
  'bg-bright-gray': props.primary,
  'text-alabaster-400': props.primary
};
</script>

<style lang="scss" scoped></style>

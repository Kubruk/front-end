<template>
  <button
    :disabled="disabled || isLoading"
    :type="type"
    class="px-4 py-2 font-semibold rounded-md disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
    :class="classes"
    @click="onClick"
  >
    {{ name }}
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { loadingStore } from '@/stores/loading';

const loading = loadingStore();
const { isLoading } = storeToRefs(loading);

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
  ghost: {
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
  },
  onClick: {
    type: Function,
    default: () => {}
  }
});

const classes = computed(() => {
  return {
    'bg-sunglow': !props.disabled && props.cta,
    'text-bright-gray': !props.disabled && props.cta,
    'bg-bright-gray': !props.disabled && props.primary,
    'text-alabaster-400': !props.disabled && props.primary
  };
});
</script>

<style lang="scss" scoped></style>

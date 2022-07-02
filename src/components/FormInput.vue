<template>
  <div class="py-2">
    <label :for="name" class="w-full font-semibold block">{{ label }}</label>
    <input
      :modelValue="value"
      :name="name"
      class="block w-full border border-alabaster-500 border-solid p-1"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="onChanged"
    />
    <span>{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useField } from 'vee-validate';
import * as yup from 'yup';

const props = defineProps({
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
  },
  placeholder: {
    type: String,
    default: null
  }
});

const value = ref('');
const emit = defineEmits(['update:modelValue']);

const onChanged = (e) => {
  emit('update:modelValue', e.currentTarget.value);
};
</script>

<style lang="scss" scoped></style>

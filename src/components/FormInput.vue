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
    },
    placeholder: {
      type: String,
      default: null
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      value: ''
    };
  },
  methods: {
    onChanged(e) {
      this.$emit('update:modelValue', e.currentTarget.value);
    }
  }
};
</script>

<style lang="scss" scoped></style>

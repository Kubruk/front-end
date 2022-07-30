<template>
  <Form
    class="w-2/6 h-2/4 absolute z-10 bg-white inset-0 m-auto shadow-sm rounded-lg p-8 flex flex-col justify-between"
  >
    <h2 v-if="title" class="text-3xl mb-4">{{ title }}</h2>
    <slot name="form" />

    <slot name="actions">
      <div class="flex flex-row-reverse items-center gap-2">
        <Button
          v-if="onSubmit"
          primary
          :name="onSubmit.name || 'Aceptar'"
          type="submit"
          @click="onSubmit.action"
        />
        <Button
          v-if="onClose"
          ghost
          :name="onClose.name || 'Cancelar'"
          @click="onClose.action"
        />
      </div>
    </slot>
  </Form>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { defineAsyncComponent } from 'vue';
const Button = defineAsyncComponent(() => import('@components/Button.vue'));

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  onSubmit: {
    type: Object,
    default: () => {}
  },
  onClose: {
    type: Object,
    default: () => {}
  }
});
</script>

<style lang="scss" scoped></style>

<template>
  <FormModal
    :on-submit="{ action: () => {} }"
    :on-close="{ action: () => {} }"
    :schema="{}"
    :title="$t('user.bruks.newBruk')"
  >
    <template #form>
      <label class="w-full font-semibold block" for="title">{{
        $t('user.bruks.brukForm.title')
      }}</label>
      <Field
        id="title"
        v-model="title"
        class="block w-full border border-alabaster-500 border-solid p-1"
        name="title"
        type="text"
      />
      <ErrorMessage name="title" />
    </template>
  </FormModal>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';
import { Field, ErrorMessage } from 'vee-validate';
const FormModal = defineAsyncComponent(() =>
  import('@components/FormModal.vue')
);

const title = ref(null);
</script>

<style lang="scss" scoped></style>

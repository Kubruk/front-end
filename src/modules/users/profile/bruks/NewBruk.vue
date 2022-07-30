<template>
  <FormModal
    :on-submit="{ action: () => {} }"
    :on-close="{ action: () => {} }"
    :schema="{}"
    :title="$t('user.bruks.newBruk')"
  >
    <template #form>
      <input type="text" />
    </template>
  </FormModal>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const FormModal = defineAsyncComponent(() =>
  import('@components/FormModal.vue')
);
</script>

<style lang="scss" scoped></style>

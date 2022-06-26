<template>
  <main class="main-page flex items-center justify-center">
    <FormCard title="Sign up">
      <template #default>
        <FormInput label="name" />
        <FormInput label="email" type="email" />
        <FormInput label="password" type="password" />
      </template>
    </FormCard>
  </main>
</template>

<script setup>
import FormCard from '@components/FormCard.vue';
import FormInput from '@components/FormInput.vue';
</script>

<style lang="scss" scoped></style>

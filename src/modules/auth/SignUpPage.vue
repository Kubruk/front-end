<template>
  <main class="main-page flex items-center justify-center">
    <FormCard title="Sign up" :on-submit="signup">
      <template #content>
        <FormInput name="name" label="name" />
        <FormInput name="email" label="email" type="email" />
        <FormInput name="password" label="password" type="password" />
      </template>
      <template #footer>
        <Button primary type="submit" class="ml-4" name="Register" />
      </template>
    </FormCard>
  </main>
</template>

<script setup>
import FormCard from '@components/FormCard.vue';
import FormInput from '@components/FormInput.vue';
import Button from '@components/Button.vue';
import axios from 'axios';
import { ref } from 'vue';

const isLoading = ref(false);

const signup = (event) => {
  isLoading.value = true;
  const payload = {
    name: event.target[0].value,
    email: event.target[1].value,
    password: event.target[2].value
  };
  axios
    .post(`${import.meta.env.VITE_API_URL}/auth/new`, payload)
    .then(({ data }) => {
      isLoading.value = false;
      console.log('Registered!');
    });
};
</script>

<style lang="scss" scoped></style>

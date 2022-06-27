<template>
  <main class="main-page flex items-center justify-center">
    <FormCard title="Login" :on-submit="login">
      <template #content>
        <FormInput label="email" name="email" type="email" />
        <FormInput label="password" name="password" type="password" />
      </template>
      <template #footer>
        <Button primary type="submit" class="ml-4" name="Login" />
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
import { userStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const isLoading = ref(false);
const user = userStore();
const router = useRouter();

const login = (event) => {
  isLoading.value = true;
  const payload = {
    email: event.target[0].value,
    password: event.target[1].value
  };
  axios
    .post(`${import.meta.env.VITE_API_URL}/auth`, payload)
    .then(({ data }) => {
      isLoading.value = false;
      user.login();
    });

  router.push({ name: 'home' });
};
</script>

<style lang="scss" scoped></style>

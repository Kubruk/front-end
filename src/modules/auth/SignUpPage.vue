<template>
  <main class="main-page flex items-center justify-center">
    <FormCard title="Sign up" :on-submit="signup">
      <template #content>
        <FormInput
          name="name"
          label="name"
          @update:model-value="(val) => (form.name = val)"
        />
        <FormInput
          name="email"
          label="email"
          type="email"
          @update:model-value="(val) => (form.email = val)"
        />
        <FormInput
          name="password"
          label="password"
          type="password"
          @update:model-value="(val) => (form.password = val)"
        />
      </template>
      <template #footer>
        <Button
          primary
          :disabled="isLoading"
          type="submit"
          class="ml-4"
          name="Register"
        />
      </template>
    </FormCard>
  </main>
</template>

<script setup>
import FormCard from '@components/FormCard.vue';
import FormInput from '@components/FormInput.vue';
import Button from '@components/Button.vue';
import axios from 'axios';
import { reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { loadingStore } from '@/stores/loading';

const loading = loadingStore();
const { isLoading } = storeToRefs(loading);

const form = reactive({
  name: '',
  email: '',
  password: ''
});

const signup = async () => {
  loading.setLoading(true);

  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/auth/new`, form);
    user.login();
    router.push({ name: 'home' });
  } catch (error) {
  } finally {
    loading.setLoading(false);
  }
};
</script>

<style lang="scss" scoped></style>

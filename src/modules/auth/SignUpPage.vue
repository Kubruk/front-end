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
import axios from 'axios';
import { reactive, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { loadingStore } from '@/stores/loading';

const FormCard = defineAsyncComponent(() => import('@components/FormCard.vue'));
const FormInput = defineAsyncComponent(() =>
  import('@components/FormInput.vue')
);
const Button = defineAsyncComponent(() => import('@components/Button.vue'));

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
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/new`,
      form
    );
    user.onLogin(data.user);
  } catch (error) {
    console.error(error);
  } finally {
    loading.setLoading(false);
    router.push({ name: 'home' });
  }
};
</script>

<style lang="scss" scoped></style>

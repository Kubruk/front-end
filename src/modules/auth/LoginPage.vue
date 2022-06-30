<template>
  <main class="main-page flex items-center justify-center">
    <FormCard title="Login" :on-submit="login">
      <template #content>
        <FormInput
          label="email"
          name="email"
          type="email"
          @update:model-value="(val) => (form.email = val)"
        />
        <FormInput
          label="password"
          name="password"
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
          name="Login"
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
import { reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { userStore } from '@/stores/user';
import { loadingStore } from '@/stores/loading';
import { useRouter } from 'vue-router';

const form = reactive({
  email: '',
  password: ''
});

const loading = loadingStore();
const { isLoading } = storeToRefs(loading);
const user = userStore();
const router = useRouter();

const login = async () => {
  loading.setLoading(true);

  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth`,
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

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
import { reactive, ref } from 'vue';
import { userStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const isLoading = ref(false);
const form = reactive({
  email: '',
  password: ''
});

const user = userStore();
const router = useRouter();

const login = async () => {
  isLoading.value = true;

  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/auth`, form);
    isLoading.value = false;
    user.login();
    router.push({ name: 'home' });
  } catch (error) {}
};
</script>

<style lang="scss" scoped></style>

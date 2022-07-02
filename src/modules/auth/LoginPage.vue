<template>
  <main class="main-page flex items-center justify-center">
    <Form :validation-schema="schema" @submit="onSubmit">
      <label for="email">Email</label>
      <Field id="email" name="email" type="email" />
      <ErrorMessage name="email" />

      <label for="password">Password</label>
      <Field id="password" name="password" type="password" />
      <ErrorMessage name="password" />
      <Button primary :disabled="isLoading" class="ml-4" name="Login" />
    </Form>
  </main>
</template>

<script setup>
import axios from 'axios';
import { reactive, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { userStore } from '@/stores/user';
import { loadingStore } from '@/stores/loading';
import { useRouter } from 'vue-router';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

const Button = defineAsyncComponent(() => import('@components/Button.vue'));
const FormCard = defineAsyncComponent(() => import('@components/FormCard.vue'));

const schema = Yup.object().shape({
  email: Yup.string().email().required().label('Email Address'),
  password: Yup.string().min(5).required().label('Your Password')
});

const loading = loadingStore();
const { isLoading } = storeToRefs(loading);
const user = userStore();
const router = useRouter();

const onSubmit = async (form) => {
  loading.setLoading(true);

  console.log(form);
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

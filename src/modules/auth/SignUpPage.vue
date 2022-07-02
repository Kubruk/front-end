<template>
  <main class="main-page flex items-center justify-center">
    <Form
      :validation-schema="schema"
      class="bg-white rounded-lg w-2/6 p-8 shadow-sm"
      @submit="signup"
    >
      <h2 class="text-3xl mb-4">Sign up</h2>
      <label class="w-full font-semibold block" for="name">Name</label>
      <Field
        id="name"
        class="block w-full border border-alabaster-500 border-solid p-1"
        name="name"
        type="text"
      />
      <label class="w-full font-semibold block" for="email">Email</label>
      <Field
        id="email"
        class="block w-full border border-alabaster-500 border-solid p-1"
        name="email"
        type="email"
      />
      <ErrorMessage name="email" />

      <label class="w-full font-semibold block" for="password">Password</label>
      <Field
        id="password"
        class="block w-full border border-alabaster-500 border-solid p-1"
        name="password"
        type="password"
      />
      <ErrorMessage name="password" />
      <div class="flex justify-end pt-4">
        <Button primary :disabled="isLoading" class="ml-4" name="Sign up" />
      </div>
    </Form>
  </main>
</template>

<script setup>
import axios from 'axios';
import { reactive, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { loadingStore } from '@/stores/loading';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

const Button = defineAsyncComponent(() => import('@components/Button.vue'));

const schema = Yup.object().shape({
  email: Yup.string().email().required().label('Email Address'),
  password: Yup.string().min(5).required().label('Your Password')
});

const loading = loadingStore();
const { isLoading } = storeToRefs(loading);

const signup = async (form) => {
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

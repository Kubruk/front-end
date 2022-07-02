<template>
  <main class="main-page flex items-center justify-center">
    <Form
      :validation-schema="schema"
      class="bg-white rounded-lg w-2/6 p-8 shadow-sm"
      @submit="onSubmit"
    >
      <h2 class="text-3xl mb-4">Login</h2>
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
        <Button primary :disabled="isLoading" class="ml-4" name="Login" />
      </div>
    </Form>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { userStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';
import api from '@helpers/api';
import { storeToRefs } from 'pinia';
import { loadingStore } from '@/stores/loading';

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
  await api.post('/auth', form, {
    onSuccess: (data) => {
      user.onLogin(data.user);
      router.push({ name: 'home' });
    }
  });
};
</script>

<style lang="scss" scoped></style>

<template>
  <main
    class="flex items-center justify-center w-full h-[-webkit-fill-available]"
  >
    <Form
      :validation-schema="schema"
      class="bg-white rounded-lg w-2/6 h-2/4 inset-0 m-auto p-8 shadow-sm"
      @submit="onSignup"
    >
      <h2 class="text-3xl mb-4">Sign up</h2>
      <label class="w-full font-semibold block" for="name">{{
        $t('user.name')
      }}</label>
      <Field
        id="name"
        v-model="name"
        class="block w-full border border-alabaster-500 border-solid p-1"
        name="name"
        type="text"
      />
      <ErrorMessage name="name" />
      <label class="w-full font-semibold block" for="email">{{
        $t('auth.email')
      }}</label>
      <Field
        id="email"
        v-model="email"
        class="block w-full border border-alabaster-500 border-solid p-1"
        name="email"
        type="email"
      />
      <ErrorMessage name="email" />

      <label class="w-full font-semibold block" for="password">{{
        $t('auth.password')
      }}</label>
      <Field
        id="password"
        v-model="password"
        class="block w-full border border-alabaster-500 border-solid p-1"
        name="password"
        type="password"
      />
      <ErrorMessage name="password" />
      <div class="flex justify-end pt-4">
        <Button
          primary
          :disabled="isDisabled"
          class="ml-4"
          :name="$t('auth.signUp')"
        />
      </div>
    </Form>
  </main>
</template>

<script setup>
import { defineAsyncComponent, ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { loadingStore } from '@/stores/loading';
import { userStore } from '@/stores/user';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';
import api from '@helpers/api';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t } = useI18n();

const Button = defineAsyncComponent(() => import('@components/Button.vue'));

const email = ref(null);
const password = ref(null);
const name = ref(null);

const schema = Yup.object().shape({
  name: Yup.string().required().label(t('auth.name')),
  email: Yup.string().email().required().label(t('auth.email')),
  password: Yup.string().min(5).required().label(t('auth.password'))
});

const isDisabled = computed(() => {
  return Boolean(
    isLoading.value || !email.value || !password.value || !name.value
  );
});

const loading = loadingStore();
const { isLoading } = storeToRefs(loading);
const { onLogin } = userStore();
const router = useRouter();

const onSignup = async (form) => {
  const loadingStatus = 'sign-up';
  loading.setLoading(loadingStatus);
  await api.post('/auth/new', form, {
    onSuccess: (data) => {
      onLogin(data.user);
      router.push({ path: '/' });
    }
  });
  loading.unsetLoading(loadingStatus);
};
</script>

<style lang="scss" scoped></style>

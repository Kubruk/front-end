<template>
  <main
    class="flex items-center justify-center w-full h-[-webkit-fill-available]"
  >
    <Form
      :validation-schema="schema"
      class="bg-white rounded-lg w-2/6 h-2/4 inset-0 m-auto p-8 shadow-sm"
      @submit="onSubmit"
    >
      <h2 class="text-3xl mb-4">Login</h2>
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
          :name="$t('auth.login')"
        />
      </div>
    </Form>
  </main>
</template>

<script setup>
import { defineAsyncComponent, computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';
import { storeToRefs } from 'pinia';
import { loadingStore } from '@/stores/loading';
import { authStore } from '@/stores/auth';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const Button = defineAsyncComponent(() => import('@components/Button.vue'));
const FormCard = defineAsyncComponent(() => import('@components/FormCard.vue'));

const email = ref(null);
const password = ref(null);

const isDisabled = computed(() => {
  return Boolean(isLoading.value || !email.value || !password.value);
});

const schema = Yup.object().shape({
  email: Yup.string().email().required().label(t('auth.email')),
  password: Yup.string().min(5).required().label(t('auth.password'))
});

const router = useRouter();
const loading = loadingStore();
const { isLoading } = storeToRefs(loading);

const { login } = authStore();

const onSubmit = async (form) => {
  await login(form);
  router.push({ path: '/' });
};
</script>

<style lang="scss" scoped></style>

<template>
  <nav class="navbar bg-bright-gray text-alabaster-400 p-2">
    <ul class="flex justify-between items-center">
      <li class="py-1 px-5 flex justify-between items-center">
        <KubrukLogo class="w-[50px] h-[50px] inline-block" />
        <router-link to="/">
          <h1 class="font-bebas ml-2 mb-[-0.4rem] text-5xl">
            {{ $t('common.kubruk') }}
          </h1>
        </router-link>
      </li>
      <li v-if="isLogged" class="py-1 px-5 flex justify-between items-center">
        <Button :name="$t('auth.logout')" :on-click="onLogout" />
        <router-link :to="`/user/${user.uid}/profile`">
          <Button class="ml-4" :name="$t('user.profile')" cta />
        </router-link>
      </li>
      <li v-else class="py-1 px-5 flex justify-between items-center">
        <router-link to="/auth/login">
          <Button :name="$t('auth.login')" />
        </router-link>
        <router-link to="/auth/sign-up">
          <Button class="ml-4" :name="$t('auth.signUp')" cta />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import KubrukLogo from '@assets/book-svgrepo-com.svg';
import { storeToRefs } from 'pinia';
import { userStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import { loadingStore } from '@/stores/loading';
import { defineAsyncComponent } from 'vue';

const Button = defineAsyncComponent(() => import('@components/Button.vue'));

const userSt = userStore();
const { isLogged, user } = storeToRefs(userSt);
const loading = loadingStore();
const router = useRouter();

const onLogout = () => {
  const loadingStatus = 'Logout';
  loading.setLoading(loadingStatus);
  userSt.onLogout();
  router.push({ path: '/' });
  loading.unsetLoading(loadingStatus);
};
</script>

<style lang="scss" scoped></style>

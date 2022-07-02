<template>
  <nav class="bg-bright-gray text-alabaster-400 pl-1">
    <ul class="flex justify-between items-center">
      <li class="py-1 px-5 flex justify-between items-center">
        <KubrukLogo class="w-[50px] h-[50px] inline-block" />
        <router-link to="/">
          <h1 class="font-bebas ml-2 mb-[-0.4rem] text-5xl">Kubruk</h1>
        </router-link>
      </li>
      <li v-if="isLogged" class="py-1 px-5 flex justify-between items-center">
        <Button name="Logout" />
        <router-link :to="`/user/profile/${user.uid}`">
          <Button class="ml-4" name="Profile" cta />
        </router-link>
      </li>
      <li v-else class="py-1 px-5 flex justify-between items-center">
        <router-link to="/auth/login">
          <Button name="Login" />
        </router-link>
        <router-link to="/auth/sign-up">
          <Button class="ml-4" name="Sign up" cta />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import KubrukLogo from '@assets/book-svgrepo-com.svg';
import { storeToRefs } from 'pinia';
import { userStore } from '@/stores/user';
import { defineAsyncComponent } from 'vue';

const Button = defineAsyncComponent(() => import('@components/Button.vue'));

const userSt = userStore();
const { isLogged, user } = storeToRefs(userSt);
</script>

<style lang="scss" scoped>
@use '@styles/layout/side-bar.module.scss';
</style>

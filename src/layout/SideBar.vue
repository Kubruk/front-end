<template>
  <nav class="nav-bar bg-bright-gray text-alabaster">
    <ul class="nav-bar__content">
      <li class="nav-bar__content--item">
        <KubrukLogo class="nav-bar__logo" />
        <router-link to="/">
          <h1 class="nav-bar__logo--title">Kubruk</h1>
        </router-link>
      </li>
      <li class="nav-bar__content--item">
        <router-link to="/login">
          <Button name="Login" ghost />
        </router-link>
        <router-link to="/sign-up">
          <Button class="ml-4" name="Sign up" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/user';
import KubrukLogo from '@assets/book-svgrepo-com.svg';
import Button from '@components/Button.vue';

const user = useStore();
const { isLogged } = storeToRefs(user);
</script>

<style lang="scss" scoped>
@use '@styles/layout/side-bar.module.scss';
</style>

<template>
  <nav class="nav-bar bg-bright-gray text-alabaster-400">
    <ul class="nav-bar__content">
      <li class="nav-bar__content--item">
        <KubrukLogo class="nav-bar__logo" />
        <router-link to="/">
          <h1 class="nav-bar__logo--title">Kubruk</h1>
        </router-link>
      </li>
      <li v-if="isLogged" class="nav-bar__content--item">
        <Button name="Logout" />
        <router-link :to="`/profile/${user.uid}`">
          <Button class="ml-4" name="Profile" cta />
        </router-link>
      </li>
      <li v-else class="nav-bar__content--item">
        <router-link to="/login">
          <Button name="Login" />
        </router-link>
        <router-link to="/sign-up">
          <Button class="ml-4" name="Sign up" cta />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import KubrukLogo from '@assets/book-svgrepo-com.svg';
import Button from '@components/Button.vue';
import { storeToRefs } from 'pinia';
import { userStore } from '@/stores/user';

const userSt = userStore();
const { isLogged, user } = storeToRefs(userSt);
</script>

<style lang="scss" scoped>
@use '@styles/layout/side-bar.module.scss';
</style>

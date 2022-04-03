<template>
  <nav class="nav-bar">
    <router-link class="nav-bar__link" to="/">Home</router-link>&nbsp;
    <router-link class="nav-bar__link" to="/about">Acerca de</router-link>
  </nav>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/user';

const user = useStore();
const { isLogged } = storeToRefs(user);

console.log(`${isLogged.value}`, isLogged.value);
</script>

<style lang="scss" scoped>
@import '@styles/layout/nav-bar.scss';
</style>

<template>
  <div class="min-h-screen min-w-screen bg-alabaster-400">
    <NavBar />
    <LoadingBar />
    <main class="main-page md:flex items-stretch">
      <SideBar />
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const NavBar = defineAsyncComponent(() => import('@layout/NavBar.vue'));
const LoadingBar = defineAsyncComponent(() =>
  import('@components/LoadingBar.vue')
);
const SideBar = defineAsyncComponent(() =>
  import('@layout/sidebar/SideBar.vue')
);
</script>

<style lang="scss">
@use '@styles/reset.scss';
@use '@styles/index.css';
</style>

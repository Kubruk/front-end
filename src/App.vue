<template>
  <div class="min-h-screen min-w-screen bg-alabaster-400">
    <NavBar />
    <LoadingBar />
    <main v-if="isLogged" class="main-page md:flex items-stretch">
      <SideBar />
      <section class="w-5/6">
        <router-view />
      </section>
    </main>
    <main v-else class="main-page md:flex items-stretch">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { userStore } from '@/stores/user';
const NavBar = defineAsyncComponent(() => import('@layout/NavBar.vue'));
const LoadingBar = defineAsyncComponent(() =>
  import('@components/LoadingBar.vue')
);
const SideBar = defineAsyncComponent(() =>
  import('@layout/sidebar/SideBar.vue')
);

const userSt = userStore();
const { isLogged } = storeToRefs(userSt);
</script>

<style lang="scss">
@use '@styles/reset.scss';
@use '@styles/index.css';
</style>

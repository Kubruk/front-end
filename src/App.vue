<template>
  <div class="min-h-screen min-w-screen bg-alabaster-400">
    <NavBar />
    <LoadingBar />
    <router-view />
  </div>
</template>

<script setup>
import NavBar from '@layout/NavBar.vue';
import LoadingBar from '@components/LoadingBar.vue';
</script>

<style lang="scss">
@use '@styles/reset.scss';
@use '@styles/index.css';
</style>

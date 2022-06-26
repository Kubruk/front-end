<template>
  <div class="min-h-screen min-w-screen bg-alabaster">
    <SideBar />
    <router-view />
  </div>
</template>

<script setup>
import SideBar from '@layout/SideBar.vue';
</script>

<style lang="scss">
@use '@styles/reset.scss';
@use '@styles/index.css';
</style>

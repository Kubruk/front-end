<template>
  <NavBar />
  <router-view />
</template>

<script setup>
import NavBar from '@layout/NavBar.vue';
</script>

<style lang="scss">
@use '@styles/reset.scss';
</style>

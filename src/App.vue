<template>
  <SideBar />
  <router-view />
</template>

<script setup>
import SideBar from '@layout/SideBar.vue';
</script>

<style lang="scss">
@use '@styles/reset.scss';
@use '@styles/index.css';
</style>

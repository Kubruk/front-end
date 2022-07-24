<template>
  <component :is="component" />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { userStore } from '@/stores/user';
import { computed, defineAsyncComponent } from 'vue';

const DashboardPage = defineAsyncComponent(() => import('./DashboardPage.vue'));
const LandingPage = defineAsyncComponent(() => import('./LandingPage.vue'));

const userSt = userStore();
const { isLogged } = storeToRefs(userSt);

const component = computed(() => {
  return isLogged.value ? DashboardPage : LandingPage;
});
</script>

<style lang="scss" scoped></style>

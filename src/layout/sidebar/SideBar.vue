<template>
  <div class="p-4 bg-white w-1/6 flex flex-col gap-2">
    <router-link v-for="link in menu" :key="link.name" :to="link.to">
      <MenuLink>{{ $t(link.name) }}</MenuLink>
    </router-link>
  </div>
</template>

<script setup>
import Menu from './classes/Menu';
import { defineAsyncComponent, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { userStore } from '@/stores/user';
const MenuLink = defineAsyncComponent(() =>
  import('./components/MenuLink.vue')
);

const userSt = userStore();
const { isLogged, user } = storeToRefs(userSt);

const menu = computed(() =>
  new Menu({ isLogged: isLogged.value, user: user.value }).build()
);
</script>

<style lang="scss" scoped></style>

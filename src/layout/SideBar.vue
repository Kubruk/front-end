<template>
  <nav class="nav-bar">
    <ul v-if="menu" class="nav-bar__content">
      <li v-for="item in menu" :key="item.title">
        <router-link class="nav-bar__link" :to="item.route">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/user';
import { SideBarMenu } from './SideBarMenu';

const user = useStore();
const { isLogged } = storeToRefs(user);

const menu = new SideBarMenu(isLogged.value).getMenu();
</script>

<style lang="scss" scoped>
@use '@styles/layout/side-bar.module.scss';
</style>

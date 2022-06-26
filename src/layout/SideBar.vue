<template>
  <nav class="nav-bar">
    <ul v-if="menu" class="nav-bar__content">
      <li class="nav-bar__content--item">
        <KubrukLogo class="nav-bar__logo" />
        <router-link to="/">
          <h1 class="nav-bar__logo--title">Kubruk</h1>
        </router-link>
      </li>
      <li v-for="item in menu" :key="item.title" class="nav-bar__content--item">
        <router-link :to="item.route">
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
import KubrukLogo from '../assets/book-svgrepo-com.svg';

const user = useStore();
const { isLogged } = storeToRefs(user);

const menu = new SideBarMenu(isLogged.value).getMenu();
</script>

<style lang="scss" scoped>
@use '@styles/layout/side-bar.module.scss';
</style>

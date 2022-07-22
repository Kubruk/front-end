<template>
  <div>
    <h3 class="p-8 text-3xl font-bold font-mono">
      {{ $t('user.profileTitle', { msg: user.name }) }}
    </h3>
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user';
import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from 'vue';

const user = ref({});
const route = useRoute();
const userID = route.params.id;
const userSt = userStore();

onBeforeMount(async () => {
  const data = await userSt.getUser(userID);

  user.value = data.user;
});
</script>

<style lang="scss" scoped></style>

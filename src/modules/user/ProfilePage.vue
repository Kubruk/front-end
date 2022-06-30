<template>
  <div>User profile</div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { loadingStore } from '@/stores/loading';

const loading = loadingStore();

const user = ref([]);

onBeforeMount(async () => {
  loading.setLoading(true);

  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/user/profile/${props.user.uid}`
    );
    user.value = data.user;
  } catch (error) {
  } finally {
    loading.setLoading(false);
  }
});
</script>

<style lang="scss" scoped></style>

<template>
  <div v-if="!isLoading">
    <Header
      :title="$t('user.profileTitle', { msg: user.name })"
      :primary-action="primaryAction"
    />
    <UserBruks :books="books" />
    <NewBruk v-if="modal.new" />
  </div>
</template>

<script setup>
import { userStore } from '@/stores/user';
import { useRoute } from 'vue-router';
import { ref, onBeforeMount, defineAsyncComponent, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { loadingStore } from '@/stores/loading';
import { useI18n } from 'vue-i18n';

const Header = defineAsyncComponent(() =>
  import('@components/SectionHeader.vue')
);
const UserBruks = defineAsyncComponent(() => import('./bruks/UserBruks.vue'));
const NewBruk = defineAsyncComponent(() => import('./bruks/NewBruk.vue'));
const { t } = useI18n();

const loading = loadingStore();
const { isLoading } = storeToRefs(loading);

const user = ref({});
const books = ref([]);
const route = useRoute();
const userID = route.params.id;
const userSt = userStore();
const modal = reactive({
  new: false
});

const primaryAction = ref(null);

const setPrimaryAction = () => {
  const { user: loggedUser } = storeToRefs(userSt);
  const isLoggedUser = userID === loggedUser.value.uid;

  const action = {
    name: t('user.bruks.newBruk'),
    action: () => (modal.new = true)
  };

  return isLoggedUser && (primaryAction.value = action);
};

setPrimaryAction();

onBeforeMount(async () => {
  const data = await userSt.getUser(userID);

  user.value = data.user;
  books.value = data.books;
});
</script>

<style lang="scss" scoped></style>

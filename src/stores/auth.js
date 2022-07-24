import { defineStore } from 'pinia';
import { loadingStore } from '@/stores/loading';
import { userStore } from '@/stores/user';
import api from '@helpers/api';

export const authStore = defineStore('auth', {
  actions: {
    async login(payload) {
      const loadingStatus = 'login';
      const loading = loadingStore();
      loading.setLoading(loadingStatus);

      const { onLogin } = userStore();

      await api.post('/auth', payload, {
        onSuccess: (data) => {
          onLogin(data.user);
        }
      });

      loading.unsetLoading(loadingStatus);
    }
  }
});

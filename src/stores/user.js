import { defineStore } from 'pinia';
import { loadingStore } from '@/stores/loading';
import axios from 'axios';

export const userStore = defineStore('user', {
  state: () => ({
    isLogged: false,
    user: {}
  }),
  actions: {
    onLogin({ name, uid, token }) {
      if (!name || !uid || !token) return;

      this.user = { name, uid };
      localStorage.setItem('token', token);
      localStorage.setItem('token-init', new Date().getTime());
      this.setLogged(true);
    },
    setLogged(bool) {
      this.isLogged = bool;
    },
    onLogout() {
      this.user = {};
      this.setLogged(false);
    },
    async checkAuthToken() {
      const loading = loadingStore();
      loading.setLoading(true);
      const token = localStorage.getItem('token');

      if (!token) return this.onLogout();

      try {
        const { data } = await axios.get('/auth/renew');
        const loginData = {
          name: data.name,
          uid: data.uid,
          token: data.token
        };
        this.onLogin(loginData);
      } catch (error) {
        localStorage.clear();
        this.onLogout();
        console.error(error);
      } finally {
        loading.setLoading(false);
      }
    }
  }
});

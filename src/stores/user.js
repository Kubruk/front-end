import { defineStore } from 'pinia';
import { loadingStore } from '@/stores/loading';
import api from '@helpers/api';

export const userStore = defineStore('user', {
  state: () => ({
    isLogged: false,
    user: {},
    books: []
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
      localStorage.clear();
      this.setLogged(false);
    },
    async checkAuthToken() {
      const loadingStatus = 'check-token';
      const loading = loadingStore();
      loading.setLoading(loadingStatus);
      const token = localStorage.getItem('token');

      if (!token) {
        loading.unsetLoading(loadingStatus);
        return this.onLogout();
      }

      await api.get('/auth/renew', {
        onSuccess: (data) => {
          const loginData = {
            ...data.user,
            token: data.token
          };
          this.onLogin(loginData);
        },
        onError: () => {
          this.onLogout();
        }
      });
      loading.unsetLoading(loadingStatus);
    },
    async getUser(id) {
      const loadingStatus = 'get-user-profile';
      const loading = loadingStore();
      loading.setLoading(loadingStatus);

      const response = await api.get(`/users/${id}`);
      loading.unsetLoading(loadingStatus);

      return response || {};
    },
    async getBooks() {
      const loadingStatus = 'get-user-bruks';
      const loading = loadingStore();
      loading.setLoading(loadingStatus);

      const { books } = await this.getUser(this.user.uid);

      this.books = books;

      loading.unsetLoading(loadingStatus);
    }
  }
});

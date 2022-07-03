import { defineStore } from 'pinia';

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
    }
  }
});

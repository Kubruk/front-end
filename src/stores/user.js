import { defineStore } from 'pinia';

export const userStore = defineStore('user', {
  state: () => ({
    isLogged: false,
    user: {}
  }),
  actions: {
    onLogin({ name, uid }) {
      if (!name || !uid) return;
      this.setLogged(true);
      this.user = { name, uid };
    },
    setLogged(bool) {
      this.isLogged = bool;
    }
  }
});

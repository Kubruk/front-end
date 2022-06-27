import { defineStore } from 'pinia';

export const userStore = defineStore('user', {
  state: () => ({
    isLogged: false
  }),
  actions: {
    login() {
      this.isLogged = true;
    }
  }
});

import { defineStore } from 'pinia';

export const loadingStore = defineStore('loading', {
  state: () => ({
    loading: []
  }),
  getters: {
    isLoading: (state) => Boolean(state.loading.length)
  },
  actions: {
    setLoading(loadingStatus) {
      this.loading.push(loadingStatus);
    },
    unsetLoading(loadingStatus) {
      console.log(this.loading, this.loading.indexOf(loadingStatus));
      this.loading.splice(this.loading.indexOf(loadingStatus), 1);
      console.log(this.loading);
    }
  }
});

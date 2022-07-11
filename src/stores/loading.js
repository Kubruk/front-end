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
      this.loading.splice(this.loading.indexOf(loadingStatus), 1);
    }
  }
});

import axios from 'axios';
import { loadingStore } from '@/stores/loading';

const loading = loadingStore();

class Api {
  constructor() {
    this.client = null;
  }

  initAxios() {
    this.client = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}`
    });
  }

  async get(url, { onSuccess, onError }) {
    loading.setLoading(true);

    try {
      const { data } = await this.client.get(url);
      if (onSuccess) onSuccess(data);
      return data;
    } catch (error) {
      console.error(error);
      if (onError) onError();
    } finally {
      loading.setLoading(false);
    }
  }

  async post(url, payload, { onSuccess, onError }) {
    loading.setLoading(true);

    try {
      const { data } = await this.client.post(url, payload);
      if (onSuccess) onSuccess(data);
      return data;
    } catch (error) {
      console.error(error);
      if (onError) onError();
    } finally {
      loading.setLoading(false);
    }
  }
}

const api = new Api();

api.initAxios();

export default api;

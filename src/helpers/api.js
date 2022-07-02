import axios from 'axios';
import { loadingStore } from '@/stores/loading';

const loading = loadingStore();

class Api {
  baseUrl = `${import.meta.env.VITE_API_URL}`;

  async get(url, { onSuccess, onError }) {
    loading.setLoading(true);

    try {
      const { data } = await axios.get(`${this.baseUrl}${url}`);
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
      const { data } = await axios.post(`${this.baseUrl}${url}`, payload);
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

export default new Api();

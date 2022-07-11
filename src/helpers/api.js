import axios from 'axios';

class Api {
  constructor() {
    this.client = null;
  }

  initAxios() {
    this.client = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}`
    });
    this.client.interceptors.request.use((config) => {
      config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
      };
      return config;
    });
  }

  async get(url, { onSuccess = null, onError = null }) {
    try {
      const { data } = await this.client.get(url);
      if (onSuccess) onSuccess(data);
      return data;
    } catch (error) {
      console.error(error);
      if (onError) onError();
    }
  }

  async post(url, payload, { onSuccess = null, onError = null }) {
    try {
      const { data } = await this.client.post(url, payload);
      if (onSuccess) onSuccess(data);
      return data;
    } catch (error) {
      console.error(error);
      if (onError) onError();
    }
  }
}

const api = new Api();

api.initAxios();

export default api;

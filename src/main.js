import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { messages } from './translations';

const i18n = createI18n({
  locale: 'es',
  messages
});

createApp(App).use(createPinia()).use(router).use(i18n).mount('#app');

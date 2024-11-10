// src/main.js

import { createApp } from 'vue'; // Usando `createApp` para Vue 3
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)  // Usando o Vue Router
  .mount('#app');

import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './Routers'; 

createApp(App)
  .use(router) // Add this line to use the router
  .mount('#app');

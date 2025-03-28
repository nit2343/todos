import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import router from './router'; 
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'; // Pinia Persist Plugin Import Karo

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // Plugin ko Pinia ke saath use karo

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(pinia);
app.mount('#app');

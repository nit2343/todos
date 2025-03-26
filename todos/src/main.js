import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import router from './router'; 


const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createI18n } from 'vue-i18n';

import App from './App.vue'
import router from './router'

import i18nConf from './config/i18n.conf';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createI18n(i18nConf))

app.mount('#app')

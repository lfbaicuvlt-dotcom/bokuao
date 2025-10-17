// src/main.js

import './assets/main.css' // 既存のインポート

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 💡 作成したルーターをインポート

const app = createApp(App)

app.use(router) // 💡 アプリにルーターを適用する

app.mount('#app')
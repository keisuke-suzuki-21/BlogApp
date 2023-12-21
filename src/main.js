import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createPersistedState } from "pinia-plugin-persistedstate"; // 追加

// index.jsを指定しなくてもrouterフォルダを指定すると自動で読み込んでくれる。
// このindex.jsでVueRouterインスタンスを作成し設定を行っている。
import router from './router'

const pinia = createPinia()
pinia.use(createPersistedState()); // 追加
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')


// createApp(App).mount('#app')

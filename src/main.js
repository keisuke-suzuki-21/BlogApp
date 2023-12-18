import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// index.jsを指定しなくてもrouterフォルダを指定すると自動で読み込んでくれる。
// このindex.jsでVueRouterインスタンスを作成し設定を行っている。
import router from './router'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')


// createApp(App).mount('#app')

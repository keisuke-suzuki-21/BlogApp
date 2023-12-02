import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// index.jsを指定しなくてもrouterフォルダを指定すると自動で読み込んでくれる。
// このindex.jsでVueRouterインスタンスを作成し設定を行っている。
import router from './router'


const app = createApp(App)
app.use(router)
app.mount('#app')


// createApp(App).mount('#app')

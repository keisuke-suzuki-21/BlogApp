import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/articles/:id',
      // name: 'articles',
      component: () => import('../views/ArticleView.vue')
    }
  ]
})

export default router
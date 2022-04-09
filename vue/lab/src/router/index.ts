import { createRouter, createWebHistory } from 'vue-router'
import HomePView from '../views/HomePView.vue'
import Home from '../components/Home.vue'
import WelcomeView from '../views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/h',
      name: 'home1',
      component: Home
    },
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    }
  ]
})

export default router

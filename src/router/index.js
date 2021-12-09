import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/block',
    name: 'Block',
    component: () => import('../views/Block.vue')
  },
  {
    path: '/flex',
    name: 'Flex',
    component: () => import('../views/Flex.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

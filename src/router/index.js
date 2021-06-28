import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lesson-1',
    name: 'Lesson 1',
    component: () => import('../views/lesson-1/index.vue')
  },
  {
    path: '/lesson-2',
    name: 'Lesson 2',
    component: () => import('../views/lesson-2/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

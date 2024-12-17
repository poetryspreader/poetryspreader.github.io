import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      component: () => import('../views/tools/index.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/contacts/index.vue')
    },
    {
      path: '/scandinavian',
      name: 'scandinavian',
      component: () => import('../views/tools/styles/Scandinavian.vue')
    }
  ]
})

export default router

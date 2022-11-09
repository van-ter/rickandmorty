import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('@/views/Todo.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('@/views/FavoriteActor.vue')
    },
    {
      path: '/actor/:id',
      component: () => import('@/views/ActorPage.vue')
    }
    
  ]
})

export default router

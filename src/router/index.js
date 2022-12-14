import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name:'404',
      component: ()=> import('../views/404NotFound.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/users',
    //   name: 'users',
    //   component: () => import('../views/UsersView.vue')
    // },
    // {
    //   path: '/users/edit/:id',
    //   name: 'users_edit_id',
    //   component: () => import('../views/UsersEditView.vue')
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/gifts',
      name: 'gifts',
      component: () => import('../views/GiftsView.vue')
    },
    {
      path: '/stickers',
      name: 'stickers',
      component: () => import('../views/StickersView.vue')
    }
  ]
})

export default router

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/uploadimg',
      name: 'upload',
      component: () => import(/* webpackChunkName: "about" */ '../views/Upload.vue')
    }
  ]
})

export default router

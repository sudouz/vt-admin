import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '../views/Home/Home.vue'
import Hodimlar from '@/views/Hodimlar/Hodimlar.vue'
import Oquvchilar from '@/views/Oquvchilar/Oquvchilar.vue'
import Video from '@/views/Video/Video.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/hodim',
          name: 'Hodimalr',
          component: Hodimlar,
        },
        {
          path: '/oquvchilar',
          name: 'Oquvchilar',
          component: Oquvchilar,
        },
        {
          path: '/video',
          name: 'video',
          component: Video,
        },
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("../views/Error/Error.vue"),
    },
  ]
})

export default router

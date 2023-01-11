import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from '../utils'

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        name: 'main',
        path: '',
        component: () => interopDefault(import('@/pages/main')),
      },
      {
        path: '/about',
        component: () => interopDefault(import('@/pages/about'))
      },
      {
        path: '/vacancy',
        component: () => interopDefault(import('@/pages/vacancy'))
      },
      {
        path: '/news',
        component: () => interopDefault(import("@/pages/news")),
      },
      {
        path: '/news/:id',
        component: () => interopDefault(import("@/pages/news/_id"))
      },
      {
        path: '/blogs',
        component: () => interopDefault(import("@/pages/blogs"))
      }
    ],
  })

  return router
}

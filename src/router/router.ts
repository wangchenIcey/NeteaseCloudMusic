import { createWebHistory, createRouter } from 'vue-router'
const history = createWebHistory()
import Layout from '@/layout/index.vue'
import { findMusic, video } from './modules'

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Layout,
      children: [{
        path: '',
        component: () => import('@/views/index.vue'),
        name: 'findMusic',
        children: findMusic
      }, {
        path: "privateFM",
        component: () => import('@/views/index.vue'),
        name: 'privateFM',

      }, {
        path: "video",
        component: () => import('@/views/index.vue'),
        name: 'video',
        children: video
      }]
    }]
})
export default router;
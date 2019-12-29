import Vue from 'vue'
import Router from 'vue-router'
import landing from '@/components/landing'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/api',
      name: 'homepage',
      component: landing
    }
  ]
  // base: '/api/'
})

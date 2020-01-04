import Vue from 'vue'
import Router from 'vue-router'
import landing from '@/components/landing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/api/search/',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: landing
    }
  ]
  // base: '/api/'
})

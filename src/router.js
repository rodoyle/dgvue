import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from './pages/landing'

// Configure plugins
Vue.use(VueRouter)
// Configure router
/* eslint-disable no-new */
var router = new VueRouter({
  mode: 'history',
  base: '/project-url',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    }
  ]
})

export default router

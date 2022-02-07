import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {showFooter: true}
    },
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/search',
      component: Search,
      meta: {showFooter: true}
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    
  ]
})
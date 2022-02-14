import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { showFooter: true },
    },
    {
      path: '',
      redirect: '/home' //重定向
    },
    {
      path: '/search',
      component: Search,
      meta: { showFooter: true },
    },
    {
      path: '/detail/:skuId',
      component: Detail,
      meta: { showFooter: true },
    },
    {
      path: '/addCartSuccess',
      component: AddCartSuccess,
      meta: { showFooter: true },
    },
    {
      path: '/shopCart',
      component: ShopCart,
      meta: { showFooter: true },
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
  ],
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }
  }
})
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
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center';
import MyOrder from '@/pages/Center/MyOrder';
import GroupOrder from '@/pages/Center/GroupOrder';

import store from '@/store';

const router = new VueRouter({
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
      path: '/trade',
      component: Trade,
      meta: { showFooter: true },
    },
    {
      path: '/pay',
      component: Pay,
      meta: { showFooter: true },
    },
    {
      path: '/paySuccess',
      component: PaySuccess,
      meta: { showFooter: true },
    },
    {
      path: '/center',
      component: Center,
      meta: { showFooter: true },
      children: [
        {
          path: 'myOrder',
          component: MyOrder
        },
        {
          path: 'groupOrder',
          component: GroupOrder
        }
      ]
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.state.regLog.userInfo.name) {
          next(from);
        } else {
          next();
        }
      }
    },
  ],
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 };
  }
})

router.beforeEach(async (to, from, next) => {
  try {
    await store.dispatch("regLog/getUserInfo");
  } catch (error) {
    console.log(error);
    store.state.regLog.userInfo = {};
  }
  next();
})

export default router;
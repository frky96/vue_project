import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import Home from '@/pages/Home';
// import Search from '@/pages/Search';
// import Login from '@/pages/Login';
// import Register from '@/pages/Register';
// import Detail from '@/pages/Detail';
// import AddCartSuccess from '@/pages/AddCartSuccess';
// import ShopCart from '@/pages/ShopCart';
// import Trade from '@/pages/Trade';
// import Pay from '@/pages/Pay';
// import PaySuccess from '@/pages/PaySuccess';
// import Center from '@/pages/Center';
// import MyOrder from '@/pages/Center/MyOrder';
// import GroupOrder from '@/pages/Center/GroupOrder';
  
// 路由懒加载 路由被访问时才加载对应组件
const Home = () => import('@/pages/Home');
const Search = () => import('@/pages/Search');
const Login = () => import('@/pages/Login');
const Register = () => import('@/pages/Register');
const Detail = () => import('@/pages/Detail');
const AddCartSuccess = () => import('@/pages/AddCartSuccess');
const ShopCart = () => import('@/pages/ShopCart');
const Trade = () => import('@/pages/Trade');
const Pay = () => import('@/pages/Pay');
const PaySuccess = () => import('@/pages/PaySuccess');
const Center = () => import('@/pages/Center');
const MyOrder = () => import('@/pages/Center/MyOrder');
const GroupOrder = () => import('@/pages/Center/GroupOrder');

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
      beforeEnter: (to, from, next) => {
        from.path == "/shopCart" ? next() : next(false);
      }
    },
    {
      path: '/pay',
      component: Pay,
      meta: { showFooter: true },
      beforeEnter: (to, from, next) => {
        from.path == "/trade" ? next() : next(false);
      }
    },
    {
      path: '/paySuccess',
      component: PaySuccess,
      meta: { showFooter: true },
      beforeEnter: (to, from, next) => {
        from.path == "/pay" ? next() : next(false);
      }
    },
    {
      path: '/center',
      component: Center,
      meta: { showFooter: true },
      children: [
        {
          path: 'myOrder',
          component: MyOrder,
        },
        {
          path: 'groupOrder',
          component: GroupOrder,
        }
      ],
    },
    {
      path: '/register',
      component: Register,
    },
    {
      path: '/login',
      component: Login,
    },
  ],
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 };
  }
})

router.beforeEach(async (to, from, next) => {
  //进入每个路由前先获取个人信息（需要token正确才能获取）
  try {
    await store.dispatch("regLog/getUserInfo");
  } catch (error) {
    console.log(error);
    //中途手动修改token 就清空regLog仓库里的userInfo
    store.state.regLog.userInfo = {};
  }
  //检查regLog仓库里的userInfo 有则为登陆状态
  if (store.state.regLog.userInfo.state == 1) {
    //登陆状态：不能去登录页 其他页面可以去
    to.path == "/login" ? next('/') : next();
  } else {
    //未登陆状态：不能去trade/pay/center
    if (to.path.includes('/trade')
      || to.path.includes('/pay')
      || to.path.includes('/center')) {
      next('/login?redirect=' + to.path);
    } else {
      //其他页面可以去
      next();
    }
  }
})

export default router;
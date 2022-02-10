import Vue from 'vue';
import App from './App.vue';

//注册全局组件
import TypeNav from './components/TypeNav';
import Carousel from './components/Carousel';
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);

//导入路由器
import router from '@/router/index';

//导入vuex仓库
import store from '@/store/index';

//导入mock的js文件 使其执行
import '@/mock/mockServe.js';

//导入swiper样式
import 'swiper/css/swiper.css';



Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router, //注册路由器
  store, //注册vuex仓库
}).$mount('#app')
import Vue from 'vue';
import App from './App.vue';

//注册全局组件
import TypeNav from './components/TypeNav';
import Carousel from './components/Carousel';
import Pagination from './components/Pagination';
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

//导入路由器
import router from '@/router/index';

//导入vuex仓库
import store from '@/store/index';

//导入mock的js文件 使其执行
import '@/mock/mockServe.js';

//导入swiper样式
import 'swiper/css/swiper.css';

// 导入全部接口
import * as API from '@/api/index';

//导入elementui
import { MessageBox } from 'element-ui';
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//导入懒加载
import VueLazyload from 'vue-lazyload';
import loadingGif from '@/assets/loading.gif';
//使用懒加载插件
Vue.use(VueLazyload, {
  loading: loadingGif,
});

//导入表单验证插件
import "@/plugins/validate";

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router, //注册路由器
  store, //注册vuex仓库
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$api = API;
  }
}).$mount('#app')


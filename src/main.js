import Vue from 'vue';
import App from './App.vue';

//注册全局组件
import TypeNav from "./components/TypeNav/index.vue";
Vue.component(TypeNav.name, TypeNav);

//导入路由器
import router from '@/router/index';

//导入vuex仓库
import store from '@/store/index';

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router, //注册路由器
  store, //注册vuex仓库
}).$mount('#app')
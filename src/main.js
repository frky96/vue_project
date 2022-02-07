import Vue from 'vue';
import App from './App.vue';

import TypeNav from "./components/TypeNav/index.vue";
Vue.component(TypeNav.name, TypeNav);


Vue.config.productionTip = false;

import {reqCategoryList} from './api/index'
reqCategoryList().then(
  response => {
    console.log(response);
  },
  error => {
    console.log(error);
  }
)
import router from '@/router/index';

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
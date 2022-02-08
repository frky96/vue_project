import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import home from './home/index';
import search from './search/index';

//vuex是个对象 他的Store方法是构造函数 可以初始化vuex仓库
export default new Vuex.Store({
  modules: {
    home,
    search,
  }
})
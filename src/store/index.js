import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import home from './home';
import search from './search';
import detail from './detail';
import cart from './cart';
import regLog from './regLog';

//vuex是个对象 他的Store方法是构造函数 可以初始化vuex仓库
export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    cart,
    regLog
  }
})
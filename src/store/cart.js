import { reqCartList, reqAddToCart, reqCheckCart, reqDelCart } from '@/api/index';

const actions = {
  async getCartList(context) {
    const result = await reqCartList();
    if (result.code === 200) {
      context.commit('GET_CART_LIST', result.data);
    } else {
      return Promise.reject(result.message)
    }
  },
  async addToCart(context, { data1, data2 }) {
    const result = await reqAddToCart(data1, data2);
    if (result.code == 200) {
      console.log(result.message);
    } else {
      return Promise.reject(result.message)
    }
  },
  async checkCart(context, { data1, data2 }) {
    const result = await reqCheckCart(data1, data2);
    if (result.code == 200) {
      console.log(result.message);
    } else {
      return Promise.reject(result.message)
    }
  },
  async delCart(context, data) {
    const result = await reqDelCart(data);
    if (result.code == 200) {
      console.log(result.message);
    } else {
      return Promise.reject(result.message)
    }
  }
};
const mutations = {
  GET_CART_LIST(state, value) {
    state.cartList = value;
    state.cartInfoList = value[0].cartInfoList;
  }
};
const state = {
  cartList: [],
  cartInfoList: []
};
const getters = {}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
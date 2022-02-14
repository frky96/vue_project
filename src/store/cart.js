import { reqCartList } from '@/api/index';

const actions = {
  async getCartList(context) {
    const result = await reqCartList();
    if (result.code === 200) {
      context.commit('GET_CART_LIST', result.data);
    }
  },
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
const getters = {

};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
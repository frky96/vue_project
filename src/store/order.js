import { reqOrderList, reqUserAddress } from '@/api/index';

const actions = {
  async getUserAddress(context, data) {
    const result = await reqUserAddress(data);
    if (result.code === 200) {
      context.commit('GET_USER_ADDRESS', result.data);
    } else {
      return Promise.reject(result);
    }
  },
  async getOrderList(context, data) {
    const result = await reqOrderList(data);
    if (result.code === 200) {
      context.commit('GET_ORDER_LIST', result.data);
    }
  },
};
const mutations = {
  GET_USER_ADDRESS(state, value) {
    state.address = value;
  },
  GET_ORDER_LIST(state, value) {
    state.orderList = value;
  }
};
const state = {
  address: {},
  orderList: {}
};
const getters = {};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
import { reqItemDetail } from '@/api/index';
import { uuidToken } from '@/utils/uuid';

const actions = {
  async getItemDetail(context, value) {
    const result = await reqItemDetail(value);
    if (result.code === 200) {
      context.commit('GET_ITEM_DETAIL', result.data);
    }
  },
  async getCartList(context, value) {
    const result = await reqCartList(value);
    if (result.code === 200) {
      context.commit('GET_ITEM_DETAIL', result.data);
    }
  }
};
const mutations = {
  GET_ITEM_DETAIL(state, value) {
    state.itemDetail = value;
  }
};
const state = {
  itemDetail: {},
  uuidToken: uuidToken()
};
const getters = {
  categoryView(state) {
    return state.itemDetail.categoryView || {};
  },
  skuInfo(state) {
    return state.itemDetail.skuInfo || {};
  },
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
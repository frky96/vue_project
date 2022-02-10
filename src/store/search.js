import { reqSearchList } from '@/api/index';

const actions = {
  async getSearchList(context, value) {
    const result = await reqSearchList(value);
    if (result.code === 200) {
      context.commit('GET_SEARCH_LIST', result.data);
    }
  }
};
const mutations = {
  GET_SEARCH_LIST(state, value) {
    state.searchList = value;
  }
};
const state = {
  searchList: {}
};
const getters = {};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
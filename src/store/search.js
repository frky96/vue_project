import { reqSearchList } from '@/api/index';

const actions = {
  async getSearchList(context, data) {
    const result = await reqSearchList(data);
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
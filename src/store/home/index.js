import { reqCateList } from "@/api/index";

const actions = {
  async getCateList(context, value) {
    const result = await reqCateList();
    if (result.code === 200) {
      context.commit('GET_CATE_LIST',result.data) 
    }
  }
};
const mutations = {
  GET_CATE_LIST(state, value) {
    state.cateList = value;
  }
};
const state = {
  cateList: []
};
const getters = {};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
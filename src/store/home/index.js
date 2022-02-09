import { reqCateList, reqBannerList } from "@/api/index";

const actions = {
  async getCateList(context) {
    const result = await reqCateList();
    if (result.code === 200) {
      context.commit('GET_CATE_LIST', result.data)
    }
  },
  async getBannerList(context) {
    const result = await reqBannerList();
    if (result.code === 200) {
      context.commit('GET_BANNER_LIST', result.data)
    }
  }
};
const mutations = {
  GET_CATE_LIST(state, value) {
    state.cateList = value;
  },
  GET_BANNER_LIST(state, value) {
    state.bannerList = value;
  },
};
const state = {
  cateList: [],
  bannerList: []
};
const getters = {};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
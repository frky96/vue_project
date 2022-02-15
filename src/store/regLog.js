import { reqCode, reqRegister, reqLogin } from '@/api/index';

const actions = {
  async getCode(context, data) {
    const result = await reqCode(data);
    if (result.code == 200) {
      console.log(`手机号${data}的验证码是${result.data}`);
      context.commit('GET_CODE', result.data);
    }
  },
  async register(context, data) {
    const result = await reqRegister(data);
    if (result.code == 200) {
      console.log(result.message);
    } else {
      return Promise.reject(result.message)
    }
  },
  async getLoginData(context, data) {
    const result = await reqLogin(data);
    if (result.code == 200) {
      console.log(result.message);
      context.commit('GET_LOGIN_DATA', result.data);
    } else {
      return Promise.reject(result.message)
    }
  },
};
const mutations = {
  GET_CODE(state, value) {
    state.code = value;
  },
  GET_LOGIN_DATA(state, value) {
    state.token = value.token;
    state.loginData = value;
  }
};
const state = {
  code: '',
  loginData: {},
  token: '',
};
const getters = {}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
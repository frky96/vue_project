//vee-validate插件

import Vue from 'vue';
import VeeValidate from 'vee-validate';
import zh_TW from 'vee-validate/dist/locale/zh_TW';

Vue.use(VeeValidate);

VeeValidate.Validator.localize('zh_TW', {
  messages: {
    ...zh_TW.messages,
    is: (field) => `${field}必须与密码相同`
  },
  attributes: {
    phone: '手机号',
    code: '验证码',
    password: '密码',
    password1: '确认密码',
    agree: '协议'
  }
})

VeeValidate.Validator.extend("agree", {
  validate: (value) => value,
  getMessage: (field) => field + '必须同意'
})
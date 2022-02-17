import axios from 'axios';

import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import store from '@/store';

const axiosReq = axios.create({
  baseURL: 'http://39.98.123.211/api',
  timeout: 5000,
});

axiosReq.interceptors.request.use((config) => {
  nprogress.start();
  if (store.state.detail.uuidToken) {
    //添加响应头userTempId：uuid游客唯一标识符
    config.headers.userTempId = store.state.detail.uuidToken;
  }
  if (localStorage.getItem('token')) {
    config.headers.token = localStorage.getItem('token');
  }
  return config;
});

axiosReq.interceptors.response.use(
  response => {
    nprogress.done();
    return response.data;
  },
  error => {
    console.log(error);
    return new Promise(() => { })
  }
);

export default axiosReq;
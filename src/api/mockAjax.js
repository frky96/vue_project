import axios from 'axios';
import nprogress from 'nprogress';

import "nprogress/nprogress.css";

let mockAxios = axios.create({
  baseURL: '/mock',
  timeout: 3000
})

mockAxios.interceptors.request.use((config) => {
  nprogress.start()
  return config;
})

mockAxios.interceptors.response.use(
  response => {
    nprogress.done();
    return response.data;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default mockAxios;
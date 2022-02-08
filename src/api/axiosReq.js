import axios from 'axios';

import nprogress from 'nprogress';
import 'nprogress/nprogress.css'

const axiosReq = axios.create({
  baseURL: 'http://39.98.123.211/api',
  timeout: 5000,
});

axiosReq.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});

axiosReq.interceptors.response.use(
  response => {
    nprogress.done();
    return response.data;
  },
  error => {
    console.log(error);
    return new Promise(() => { });
  }
);

export default axiosReq;
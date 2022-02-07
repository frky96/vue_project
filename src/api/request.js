import axios from 'axios';

const requests = axios.create({
  baseURL: 'http://39.98.123.211/api',
  timeout: 5000,
});

requests.interceptors.request.use((config)=>{
  return config;
});

requests.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default requests;
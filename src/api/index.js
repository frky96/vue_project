import axiosReq from './axiosReq';
import mockAxios from './mockAjax'

export const reqCateList = () => {
  return axiosReq({
    url: '/product/getBaseCategoryList',
    method: 'GET'
  })
}

export const reqBannerList = () => {
  return mockAxios.get('/banner')
}
import axiosReq from './axiosReq';
import mockAxios from './mockAjax'

export const reqCateList = () => {
  return axiosReq({
    url: '/product/getBaseCategoryList',
    method: 'GET'
  })
}
export const reqSearchList = (params = {}) => {
  return axiosReq({
    url: '/list',
    method: 'POST',
    data: params
  })
}
export const reqItemDetail = (skuId) => {
  return axiosReq({
    url: `/item/${skuId}`,
    method: 'GET',
  })
}

export const reqBannerList = () => {
  return mockAxios.get('/banner')
}
export const reqFloorList = () => {
  return mockAxios.get('/floor')
}


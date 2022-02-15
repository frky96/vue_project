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
export const reqAddToCart = (skuId, skuNum) => {
  return axiosReq({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'POST',
  })
}
export const reqCartList = () => {
  return axiosReq({
    url: `/cart/cartList`,
    method: 'GET',
  })
}
export const reqDelCart = (skuId) => {
  return axiosReq({
    url: `/cart/deleteCart/${skuId}`,
    method: 'DELETE',
  })
}
export const reqCheckCart = (skuID,isChecked) => {
  return axiosReq({
    url: `/cart/checkCart/${skuID}/${isChecked}`,
    method: 'GET',
  })
}
export const reqCode = (phoneNum) => {
  return axiosReq({
    url: `/user/passport/sendCode/${phoneNum}`,
    method: 'GET',
  })
}
export const reqRegister = (data) => {
  return axiosReq({
    url: `/user/passport/register`,
    method: 'POST',
    data
  })
}
export const reqLogin = (data) => {
  return axiosReq({
    url: `/user/passport/login`,
    method: 'POST',
    data
  })
}

export const reqBannerList = () => {
  return mockAxios.get('/banner')
}
export const reqFloorList = () => {
  return mockAxios.get('/floor')
}


import axiosReq from './axiosReq';
import mockAxios from './mockAjax';

export const reqCateList = () => {
  return axiosReq({
    url: '/product/getBaseCategoryList',
    method: 'GET'
  })
}
export const reqSearchList = (data = {}) => {
  return axiosReq({
    url: '/list',
    method: 'POST',
    data
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
export const reqCheckCart = (skuID, isChecked) => {
  return axiosReq({
    url: `/cart/checkCart/${skuID}/${isChecked}`,
    method: 'GET',
  })
}
export const reqUserAddress = () => {
  return axiosReq({
    url: `/user/userAddress/auth/findUserAddressList`,
    method: 'GET',
  })
}
export const reqOrderList = () => {
  return axiosReq({
    url: `/order/auth/trade`,
    method: 'GET',
  })
}
export const reqOrderSubmit = (tradeNo, data = {}) => {
  return axiosReq({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: 'POST',
    data
  })
}
export const reqGetOrder = (orderId) => {
  return axiosReq({
    url: `/payment/weixin/createNative/${orderId}`,
    method: 'GET',
  })
}
export const reqPayStatus = (orderId) => {
  return axiosReq({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: 'GET',
  })
}
export const reqMyOrderList = (page = 1, limit = 10) => {
  return axiosReq({
    url: `/order/auth/${page}/${limit}`,
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
export const reqUserInfo = () => {
  return axiosReq({
    url: `/user/passport/auth/getUserInfo`,
    method: 'GET',
  })
}
export const reqLogout = () => {
  return axiosReq({
    url: `/user/passport/logout`,
    method: 'GET',
  })
}


export const reqBannerList = () => {
  return mockAxios.get('/banner')
}
export const reqFloorList = () => {
  return mockAxios.get('/floor')
}


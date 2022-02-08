import axiosReq from './axiosReq'

export const reqCateList = () => {
  return axiosReq({
    url: '/product/getBaseCategoryList',
    method: 'GET'
  })
}
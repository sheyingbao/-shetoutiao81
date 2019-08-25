import axios from 'axios'
import { promised } from 'q'
// 将后台接口的地址给axios的bashURL
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
axios.interceptors.request.use(function (config) {
// 在发请求请做一些业务处理
// 进行配置的注入
  let userInfo = window.localIStrage.getItem('user-info')
  let token = userInfo ? JSON.parse(userInfo).token : null // 获取token
  config.headers.Authorization = `Bearer ${token}`// 直接将token注入到 请求参数中
  return config
}, function (error) {
  // 对请求失败做处理
  return promise.reject(error)
})

export default axios

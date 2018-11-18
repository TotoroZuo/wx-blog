import wxRequest from './main.js'
wxRequest.defaults.baseURL = 'https://pang.zuolongfei.me/wx'
// 针对post请求增加token
wxRequest.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      const token = wx.getStorageSync('token')
      config.headers.authorization = 'Bearer ' + token
    }
    return config
  },
  err => Promise.reject(err)
)
wxRequest.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)
export default wxRequest

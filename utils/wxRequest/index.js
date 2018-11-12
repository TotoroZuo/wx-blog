import wxRequest from './main.js'
const util = require('../util.js')
wxRequest.defaults.baseURL = 'https://pang.zuolongfei.me'
// 针对post请求增加token
wxRequest.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      util.promisify(wx.getStorageSync)({
        key: 'token'
      }).then(res => {
        console.log(res)
        config.headers.authorization = 'Bearer ' + res.data
      })
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })
export default wxRequest

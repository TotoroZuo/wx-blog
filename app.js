// app.js
const util = require('./utils/util.js')
import wxRequest from './utils/wxRequest/index.js'
// 针对post请求增加token
wxRequest.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      util.promisify(wx.getStorageSync)({
        key: 'token'
      }).then(res=>{
        config.headers.authorization = res.data;
      })
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.autoLogin()
  },
  autoLogin(){
    util.promisify(wx.checkSession)().then(() => {
      console.log('session 生效')
      this.getUserInfo()
    }).catch(err => {
      console.log('自动登录失败, 重新登录', err)
      this.login()
    })
  },
  getUserInfo() {
    util.promisify(wx.getUserInfo)().then(res => {
      this.storeUserInfo(res.data)
    }).catch(err => {
      this.retryGetInfo()
    })
  },
  retryGetInfo(){
    const params = {
      title:'自动登录失败',
      content:'点击按钮重新登录',
      showCancel:false
    }
    util.promisify(wx.showModal)(params).then(res => {
      if (res.confirm){this.getUserInfo()}
    }).catch(err => {
      console.log(err)
    })
  },
  storeUserInfo(params){
    if (!params){
      return false
    }
    const info = params.userInfo
    wxRequest.post('/user/storeUser', {data:{
      username: info.nickName,
      avator: info.avatarUrl,
    }}).then(res=>{
      this.globalData.userInfo = res.data
    }).catch(err=>{
      console.log('存储用户信息失败')
    })
  },
  login() {
    console.log('登录')
    util.promisify(wx.login)().then(({ code }) => {
      console.log(`code: ${code}`)
      return wxRequest.get('/user/getToken', {
        data:{
        code
      }})
    }).then(res=>{
      wx.setStorage({
        key: "token",
        data: res.data.token
      })
      this.autoLogin()
    }).catch(err=>{
      console.log('获取code失败')
    }).catch(err=>{
      console.log('获取token失败')
    })
  },
  globalData: {
    userInfo: null
  }
})

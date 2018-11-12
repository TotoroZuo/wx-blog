// app.js
import wxRequest from './utils/wxRequest/index.js'
const util = require('./utils/util.js')

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // if (!this.globalData.userInfo) {
    //   this.login()
    // }
  },
  onShow () {
    if (!this.globalData.userInfo) {
      this.login()
    }
  },
  autoLogin () {
    util.promisify(wx.checkSession)().then(() => {
      console.log('session 生效')
      this.getUserInfo()
    }).catch(err => {
      console.log('自动登录失败, 重新登录', err)
      this.login()
    })
  },
  getUserInfo () {
    util.promisify(wx.getUserInfo)().then(res => {
      this.storeUserInfo(res.data)
    }).catch(err => {
      if (err) {
        wx.redirectTo({
          url: '/pages/login/login'
        })
      }
    })
  },
  storeUserInfo (params) {
    if (!params) {
      return false
    }
    const info = params.userInfo
    wxRequest.post('/user/storeUser', { data: {
      username: info.nickName,
      avator: info.avatarUrl
    } }).then(res => {
      this.globalData.userInfo = res.data
    }).catch(err => {
      if (err) {
        console.log('存储用户信息失败')
      }
    })
  },
  login () {
    console.log('登录')
    util.promisify(wx.login)().then(({ code }) => {
      console.log(`code: ${code}`)
      return wxRequest.get('/user/getToken', {
        data: {
          code
        }
      })
    }).then(res => {
      wx.setStorageSync('token', res.data.token)
      this.getUserInfo()
    }).catch(err => {
      if (err) {
        console.log('获取code失败')
      }
    }).catch(err => {
      if (err) {
        console.log('获取token失败')
      }
    })
  },
  globalData: {
    userInfo: null
  }
})

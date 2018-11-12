// index.js
// 获取应用实例
import wxRequest from '../../utils/wxRequest/index.js'
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    tips: '点击按钮，更新个人信息',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  setUserInfo: function (e) {
    console.log(e)
    this.storeUserInfo(e.detail)
  },
  getUserInfo () {
    // 在没有 open-type=getUserInfo 版本的兼容处理
    util.promisify(wx.getUserInfo)().then(res => {
      this.storeUserInfo(res.data)
    }).catch(err => {
      if (err) {
        console.log('获取用户信息失败')
      }
    })
  },

  storeUserInfo (params) {
    if (!params) {
      return false
    }
    const info = params.userInfo
    wxRequest.post('/user/storeUser', {
      data: {
        username: info.nickName,
        avator: info.avatarUrl
      }
    }).then(res => {
      app.globalData.userInfo = res.data
      console.log(app.globalData)
      wx.switchTab({
        url: '/pages/ucenter/ucenter'
      })
    }).catch(err => {
      if (err) {
        console.log('存储用户信息失败')
      }
    })
  }
})

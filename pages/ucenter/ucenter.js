// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    slogon: '没事早睡觉，有空多赚钱！',
    qq: '674028268',
    email: 'zlf@zuolongfei.me',
    tel: '155367922825',
    github: 'github.com/TotoroZuo',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    this.getUserInfo()
  },
  getUserInfo () {
    this.userInfo = app.globalData.userInfo
    this.setData({
      userInfo: app.globalData.userInfo
    })
    console.log(app.globalData.userInfo)
  }
})

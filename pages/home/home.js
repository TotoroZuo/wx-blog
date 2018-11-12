// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    pic: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKabrSY1Qm2ziaatAA1LJlYQq1n2JpsfwO02JujWsVA9qkw08IibDaJlnjPR21bSx4dgVecPsCPQ5vQ/132'
  },
  onShow: function () {
    if (!app.globalData.userInfo) {
      app.login()
      return false
    }
  }
})

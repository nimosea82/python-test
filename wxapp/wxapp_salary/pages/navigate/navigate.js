// pages/navigate/navigate.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userMsg: "空白留言",
    app_token: "7yaq55",
    userid: "",
    isDisabled:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //读取本地存储的数据
    let that = this
    wx.getStorage({
      key: 'uid',
      success(res) {
        that.setData({
          userid: res.data
        })
      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  bindUserLogin: function () {
    let that = this
    wx.getStorage({
      key: 'uid',
      success(res) {
        that.bindSalaryList()
      },
      fail() {
        that.bindLogin()
      }
    })

  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  },
  //跳转到salaryList页面
  bindSalaryList: function () {
    wx.navigateTo({
      url: '../salarylist/salarylist'
    })
  },

  //跳转到登录页面
  bindLogin: function () {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  bindBillInfo: function () {
    wx.navigateTo({
      url: '../bill/bill'
    })

  },
  userMsginput: function (e) {
    this.setData({
      userMsg: e.detail.value,
      isDisabled:false
    })

  },
  setUserMsg: function () {
    let that = this
    //发起网络请求
    wx.request({
      url: 'https://wxapp.yh2j.com/api/salary/usermsg',
      data: {
        uid: that.data.userid,
        app_token: that.data.app_token,
        app_type: 2,
        content: that.data.userMsg,
        password: that.data.userPassword
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.errcode != 0) {
          wx.showToast({
            title: '留言失败',
          })

        } else {
          //留言成功
          that.setData({
            isDisabled:true
          })
          wx.showToast({
            title: '感谢您的支持！',
          })
        }

      },
    })
  },

})
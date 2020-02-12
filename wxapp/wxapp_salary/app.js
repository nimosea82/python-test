//app.js
App({
  onLaunch: function () {
    let that = this
    //小程序自动更新
    this.autoUpdate();

    wx.getStorage({
      key: 'openid',
      success(res) {
        //成功
      },
      fail() {
        // 登录
        wx.login({
          success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            that.getOpenid(res.code)
          }
        })
      }
    });

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    });


  },

  autoUpdate: function () {
    //小程序自动更新
    var that = this
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()

      updateManager.onCheckForUpdate(function (res) {
        //请求信版本信息的回调
        console.log(res.hasUpdate)
      })


      updateManager.onUpdateReady(function () {
        wx.showModal({
          title: '更新提示',
          content: '小程序有更新，是否重启应用?',
          success: function (res) {
            if (res.confirm) {
              //新的版本已下载好，调用applyUpdate应用新版本并重启
              updateManager.applyUpdate()
            }
          }
        })
      })

      updateManager.onUpdateFailed(function () {
        //新版本下载失败
        wx.showModal({
          title: '已经有新版本了',
          content: '新版本已经上线，请您删除当前小程序，重新搜索打开'
        })
      })
    }
  },
  getOpenid: function (code) {
    let that = this
    //发起网络请求
    wx.request({
      url: 'https://wxapp.yh2j.com/api/wx/getOpenid',
      data: {
        app_token: '7yaq55',
        app_type: 2,
        code: code,
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {

        if (res.data.errcode == 0) {
          //成功
          wx.setStorage({
            key: "openid",
            data: res.data.openid
          })

        }

      },
    })
  },
  globalData: {
    userInfo: null,
    uid: ""
  }
})
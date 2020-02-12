Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: "1",
    app_token: "7yaq55",
    vap_psw: "",
    username: "",
    uid: 0,
    mobile: "",
    uname: "",
    idcard: "",
    errmsg: "",
    vap_array: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getStorage({
      key: "uid",
      success(res) {
        //登录过
        that.setData({
          uid: res.data
        })

      },
      fail() {
        wx.redirectTo({
          url: '../login/login',
        })

      }

    });
    wx.getStorage({
      key: "vap_psw",
      success(res) {
        //登录过
        that.setData({
          vap_psw: res.data
        })

      }

    });

  },
  userPSWinput: function (e) {
    this.setData({
      vap_psw: e.detail.value
    });

    wx.setStorage({
      key: "vap_psw",
      data: e.detail.value
    })


  },
  userMobileInput: function (e) {
    this.setData({
      mobile: e.detail.value
    })

  },

  getVapInfo: function () {
    let that = this
    that.setData({
      errmsg: "",
      vap_array:[]
    })  
    if (this.data.mobile.length >= 8) {
      //发起网络请求
      wx.request({
        url: 'https://wxapp.yh2j.com/api/vap/getvapinfo',
        data: {
          uid: that.data.uid,
          app_token: that.data.app_token,
          app_type: '2',
          sql_mobile: that.data.mobile,
          sql_name: that.data.uname,
          sql_idcard: that.data.idcard,
          sql_psw: that.data.vap_psw,
        },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          if (res.data.errcode != 0) {
            that.setData({
              errmsg: res.data.errmsg
            })
          } else {
            if (res.data.rows == 0){
              that.setData({
                errmsg: "未找到记录"
              })
            }else {
              that.setData({
                vap_array: res.data.data,
              })
              console.log(res)
            }

          }

        }
      })
    } else {
      that.setData({
        errmsg: "手机号码过短"
      })
    }

  },



})
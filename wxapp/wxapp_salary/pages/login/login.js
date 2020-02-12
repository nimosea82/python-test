
Page({

  data: {
    userAccount: "",
    userPassword: "",
    app_token: "7yaq55",
    errmsg:""

  },

  onLoad: function (options) {

  },

  bindUserLogin: function () {
    var userAccount
    var userPassword
    userAccount = this.data.userAccount
    userPassword = this.data.userPassword

    if (userAccount == "") {
      wx.showToast({
        title: '账号不能为空',
        icon: 'none'
      })
    } else {
      if (userPassword.length == "") {
        wx.showToast({
          title: '密码不能为空',
          icon: 'none'
        })
      } else {
        //判断账号密码
        this.getCheck()

      };
    };

  },


  getCheck: function () {
    let that = this
    wx.login({
      success(res) {
   
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://wxapp.yh2j.com/api/wx/getwxauth',
            data: {
              code: res.code,
              app_token: that.data.app_token,
              account:that.data.userAccount,
              password:that.data.userPassword,
            },
            header: {
              'content-type': 'application/json'
            },
            success(res) {


            
             if (res.data.errcode != 0){
                that.setData({
                  errmsg:res.data.errmsg
                })
             }else{
               //登录成功
               wx.setStorage({
                key: "uid",
                data: res.data.uid
              })

               that.bindToIndex()
             }
              
            },
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  },


  userAccountInput: function (e) {
    this.setData({
      userAccount: e.detail.value,
      errmsg:""
    })

  },
  userPasswordInput: function (e) {
    this.setData({
      userPassword: e.detail.value,
      errmsg:""
    })
  },

  bindToIndex:function(){
    wx.redirectTo({
      url: '../index/index',
    })
  }



})
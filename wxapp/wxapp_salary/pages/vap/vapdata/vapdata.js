// pages/vap/vapdata/vapdata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isDisabled: false,
    userMsg: "空白留言",
    openid: "",
    dateid: 0,
    maxid: 0,
    app_token: '7yaq55',
    id_date_text: "",
    mainCity: '台州',
    mainCityCheckedNumber: 0,
    mainCityCheckedNumberIncrease: 0,
    mainCityCureNumber: 0,
    yhChecked: 0,
    yhIncrease: 0,
    wlChecked: 0,
    wlIncrease: 0,
    lqChecked: 0,
    lqIncrease: 0,
    jjChecked: 0,
    jjIncrease: 0,
    hyChecked: 0,
    hyIncrease: 0,
    lhChecked: 0,
    lhIncrease: 0,
    xjChecked: 0,
    xjIncrease: 0,
    ttChecked: 0,
    ttIncrease: 0,
    smChecked: 0,
    smIncrease: 0,
    personArry: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getStorage({
      key: 'openid',
      success(res) {
        that.setData({
          openid: res.data
        })
      },
      fail() {
        that.setData({
          openid: 'errOpenid'
        })
      }
    })

    wx.getStorage({
      key: 'userInfo',
      success(res) {
        that.setData({
          userInfo: res.data
        })
      }
    })

    this.getVapDataNew()


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {



  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

    wx.showToast({
      title: '正在加载',
      icon: "loading"
    })
    this.getVapDataNew()
    wx.stopPullDownRefresh()


  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //城市历史数据
  bindCityInfo: function () {
    wx.navigateTo({
      url: '../../vap/vapcityinfo/vapcityinfo'
    })
  },


  //获得最新dateid
  getVapMaxid: function () {
    let that = this
    //发起网络请求
    wx.request({
      url: 'https://wxapp.yh2j.com/api/vap/getVapMaxid',
      data: {
        app_token: that.data.app_token,
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {

        if (res.data.errcode == 0) {

          that.setData({
            maxid: res.data.maxid
          })
        }

      },
    })
  },

  //获得最新data
  getVapDataNew: function () {
    var maxid
    let that = this
    //发起网络请求
    wx.request({
      url: 'https://wxapp.yh2j.com/api/vap/getVapMaxid',
      data: {
        app_token: '7yaq55'
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.errcode == 0) {

          that.setData({
            maxid: res.data.maxid
          })
          //最大maxid   
          maxid = res.data.maxid
          that.getVapDataInfo(maxid)

        }

      },
    })
  },

  //获得vap数据详细信息
  getVapDataInfo: function (dateid) {
    let that = this
    that.setData({
      dateid: dateid
    })

    //发起网络请求
    wx.request({
      url: 'https://wxapp.yh2j.com/api/vap/getVapData',
      data: {
        app_token: that.data.app_token,
        openid: that.data.openid,
        nick_name: that.data.userInfo.nickName,
        app_type: 2,
        date_id: dateid
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {

        if (res.data.errcode == 0) {
          that.setData({
            id_date_text: res.data.vapdate.id_date_text,
            personArry: res.data.person_info.data,
            mainCityCheckedNumber: res.data.maincity.checked_number,
            mainCityCheckedNumberIncrease: res.data.maincity.checked_number_increase,
            mainCityCureNumber: res.data.maincity.cure_number,
            yhChecked: res.data.yh.checked_number,
            yhIncrease: res.data.yh.checked_number_increase,
            wlChecked: res.data.wl.checked_number,
            wlIncrease: res.data.wl.checked_number_increase,
            lqChecked: res.data.lq.checked_number,
            lqIncrease: res.data.lq.checked_number_increase,
            jjChecked: res.data.jj.checked_number,
            jjIncrease: res.data.jj.checked_number_increase,
            hyChecked: res.data.hy.checked_number,
            hyIncrease: res.data.hy.checked_number_increase,
            lhChecked: res.data.lh.checked_number,
            lhIncrease: res.data.lh.checked_number_increase,
            xjChecked: res.data.xj.checked_number,
            xjIncrease: res.data.xj.checked_number_increase,
            ttChecked: res.data.tt.checked_number,
            ttIncrease: res.data.tt.checked_number_increase,
            smChecked: res.data.sm.checked_number,
            smIncrease: res.data.sm.checked_number_increase,

          })
        }

      },
    })


  },

  bindDayNext: function () {
    //日期id值是否有数据
    let that = this
    var newid = that.data.dateid + 1
    wx.showToast({
      title: '正在加载',
      icon: "loading"
    })
    //发起网络请求
    wx.request({
      url: 'https://wxapp.yh2j.com/api/vap/dateCanUse',
      data: {
        app_token: '7yaq55',
        date_id: newid
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.errcode == 0) {
          that.getVapDataInfo(newid)
        }

      },
    })
  },
  bindDayBefore: function () {
    //日期id值是否有数据
    let that = this
    var newid = that.data.dateid - 1  
    wx.showToast({
      title: '正在加载',
      icon: "loading"
    })
    //发起网络请求
    wx.request({
      url: 'https://wxapp.yh2j.com/api/vap/dateCanUse',
      data: {
        app_token: '7yaq55',
        date_id: newid
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.errcode == 0) {

          that.getVapDataInfo(newid)

        }

      },
    })
  },
  userMsginput: function (e) {
    this.setData({
      userMsg: e.detail.value,
      isDisabled: false
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
            isDisabled: true
          })
          wx.showToast({
            title: '感谢您的支持！',
          })
        }

      },
    })
  },

})
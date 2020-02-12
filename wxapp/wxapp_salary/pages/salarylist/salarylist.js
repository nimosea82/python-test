// pages/salarylist/salarylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: "1",
    app_token: "7yaq55",
    username: "",
    uid: 0,
    salaryListArray:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getStorage({
      key:"uid",
      success (res) {
        //登录过
        that.setData({
          uid:res.data
        })
        that.getSalaryList()      

      },
      fail() {
        wx.redirectTo({
          url: '../login/login',
        })

      }

    })


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

  getSalaryList: function () {
    let that = this
    if (this.data.uid > 0) {
      //发起网络请求
      wx.request({
        url: 'https://wxapp.yh2j.com/api/salary/getSalaryList',
        data: {
          uid: that.data.uid,
          app_token: that.data.app_token,
          app_type: '2',
        },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          
          that.setData({
            salaryListArray: res.data.data,
          })           
 
        }
      })
    } else {
      console.log()
    }

  },

  bindToSalaryInfo:function(e){
    var url="../salaryinfo/salaryinfo?fid="+ e.currentTarget.id
    wx.navigateTo({
      url: url     
    })

  },

})
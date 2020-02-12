// pages/salaryinfo/salaryinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fid:0,
    app_token: "7yaq55",
    uid:"",
    salaryInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let that = this
      this.setData({
        fid:options.fid
      })
          
      //读取本地存储的数据
      wx.getStorage({
        key: 'uid',
        success (res) {
          that.setData({
            uid:res.data
          })
          //读取工资明细
          that.getSalaryInfo()
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

  getSalaryInfo: function () {
    let that = this
    if (this.data.fid > 0) {
      //发起网络请求
      wx.request({
        url: 'https://wxapp.yh2j.com/api/salary/getSalaryInfo',
        data: {          
          uid: that.data.uid,
          app_token: that.data.app_token,
          id: that.data.fid,
          app_type: '2',
        },
        header: {
          'content-type': 'application/json'
        },
        success(res) {          
          that.setData({
            salaryInfo: res.data.data,
          })            
      
        }
      })
    } else {
      console.log()
    }

  },

})
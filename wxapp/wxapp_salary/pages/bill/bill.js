// pages/bill/bill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  copyBill:function(){
    var billInfoText
    billInfoText="玉环市第二人民医院健共体集团\t\n税号:12331 02147 28414 818\t\n开户银行:中国建设银行楚门支行\t\n银行账号:33001 66725 00500 00990"
    this.setData({
      modalHidden:true
    })
    //复制票据信息
    wx.setClipboardData({
      data:billInfoText
    })

  },
  onShareAppMessage: function () {
    return {
     title: '健共体发票开票信息',
     desc: '健共体发票开票信息',
     imageUrl:"../../images/billshare.png", //此处就是写的随机分享图片,
     path: 'pages/bill/bill' // 路径，传递参数到指定页面。
     
    }
   }
})
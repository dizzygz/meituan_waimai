// pages/payOrders/payOrders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    payOrders: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      payOrders: wx.getStorageSync('payOrders')
    })
    wx.setNavigationBarTitle({
      title: '提交订单',
    });
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#f4f4f4',
    })
  },
})
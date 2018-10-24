// pages/orders/orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      orders: wx.getStorageSync('orders')
    })
    wx.setNavigationBarTitle({
      title: '订单',
    });
  },
})
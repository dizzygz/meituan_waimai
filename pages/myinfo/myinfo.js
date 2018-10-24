// pages/myinfo/myinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [{
        title: '美团红包',
        icon: '/img/myinfo/hb.svg'
      },
      {
        title: '商家代金券',
        num: 9,
        icon: '/img/myinfo/djq.svg'
      },
      {
        title: '我的地址',
        icon: '/img/myinfo/dz.svg'
      },
      {
        title: '邀请有将',
        icon: '/img/myinfo/lw.svg'
      },
      {
        title: '客服中心',
        iScon: '/img/myinfo/kf.svg'
      },
      {
        title: '帮助和反馈',
        icon: '/img/myinfo/help.svg'
      },
      {
        title: '协议和说明',
        icon: '/img/myinfo/sm.svg'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    wx.setNavigationBarTitle({
      title: '我的',
    });
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#f8c724',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
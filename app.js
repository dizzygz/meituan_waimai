//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    // 商店list
    var storesInfo = [{
        id: 's1',
        img: '/img/stores/s1.jpg',
        name: 'UIMI饭桶（民大店）',
        score: 4.9,
        sale: 33,
        time: 20,
        kilo: '2.9km',
        startDispatch: 15,
        dispatch: 0,
        perCost: 15,
        special: '极速退款',
        notice: '新学期与大家象语，在此注销过半新学期...',
        activity: [{
          id: 's1_a1',
          mode: '减',
          color: 'red',
          modeDes: '满30减15；满48减20；满70减30'
        }]
      },
      {
        id: 's2',
        img: '/img/stores/s2.jpg',
        name: '美滋滋舌位火锅冒菜',
        score: 4.6,
        sale: 362,
        time: 40,
        kilo: '2.9km',
        startDispatch: 0,
        dispatch: 0,
        perCost: 10,
        special: '',
        notice: '新学期与大家象语，在此注销过半新学期...',
        activity: [{
          id: 's2_a1',
          mode: '首',
          color: 'orange',
          modeDes: '新用户立减7元'
        }, {
          id: 's2_a2',
          mode: '减',
          color: 'red',
          modeDes: '满30减15；满48减20；满70减30'
        }]
      },
      {
        id: 's3',
        img: '/img/stores/s3.jpg',
        name: '东北水饺店（成信店）',
        score: 4.3,
        sale: 30,
        time: 30,
        kilo: '483m',
        startDispatch: 0,
        dispatch: 0,
        perCost: 15,
        special: '',
        notice: '新学期与大家象语，在此注销过半新学期...',
        activity: [{
          id: 's3_a1',
          mode: '首',
          color: 'orange',
          modeDes: '新用户立减7元'
        }, {
          id: 's3_a2',
          mode: '减',
          color: 'red',
          modeDes: '满30减15；满48减20；满70减30'
        }]
      }
    ]
    // 菜单
    var dishes = [

      {
        sid: 's1',
        id: "s1_2",
        types: '折扣',
        img: '/img/menus/s1_2.jpg',
        name: '照烧鸡排饭',
        notice: '来自关系柳州，算啦双糖',
        sale: 33,
        good: 44,
        oldCost: '30',
        perCost: 11.6,
        special: '2.93',
        dishNum: 0
      },
      {
        sid: 's1',
        id: "s1_3",
        types: '折扣',
        img: '/img/menus/s1_3.jpg',
        name: '沙拉鸡排饭',
        notice: '来自关系柳州，算啦双糖',
        sale: 34,
        good: 21,
        oldCost: '30',
        perCost: 10.5,
        special: '2.93',
        dishNum: 0
      },
      {
        sid: 's1',
        id: "s1_4",
        types: '热销',
        img: '/img/menus/s1_1.jpg',
        name: '黑椒鸡排饭',
        notice: '来自关系柳州，算啦双糖',
        sale: 334,
        good: 2,
        oldCost: '30',
        perCost: 6.6,
        special: '2.93',
        dishNum: 0
      },
      {
        sid: 's1',
        id: "s1_1",
        types: '折扣',
        img: '/img/menus/s1_1.jpg',
        name: '招牌花甲米线',
        notice: '来自关系柳州，算啦双糖',
        sale: 36,
        good: 4,
        oldCost: '30',
        perCost: 15,
        special: '2.93',
        dishNum: 0
      },
      {
        sid: 's1',
        id: "s1_5",
        types: '热销',
        img: '/img/menus/s1_1.jpg',
        name: '蘑菇汁鸡排饭',
        notice: '来自关系柳州，算啦双糖',
        sale: 334,
        good: 2,
        oldCost: '30',
        perCost: 6.6,
        special: '2.93',
        dishNum: 0
      },
      {
        sid: 's2',
        id: "s2_1",
        types: '折扣',
        img: '/img/menus/s2_1.jpg',
        name: '素冒',
        notice: '来自关系柳州，算啦双糖',
        sale: 36,
        good: 14,
        oldCost: '30',
        perCost: 9.9,
        special: '2.93',
        dishNum: 0
      },
      {
        sid: 's2',
        id: "s2_2",
        types: '折扣',
        img: '/img/menus/s2_2.jpg',
        name: '素冒+虾饺',
        notice: '来自关系柳州，算啦双糖',
        sale: 37,
        good: 20,
        oldCost: '30',
        perCost: 14,
        special: '2.93',
        dishNum: 0
      },
      {
        sid: 's2',
        id: "s2_3",
        types: '折扣',
        img: '/img/menus/s2_2.jpg',
        name: '米饭',
        notice: '来自关系柳州，算啦双糖',
        sale: 37,
        good: 20,
        oldCost: '30',
        perCost: 1,
        special: '2.93',
        dishNum: 0
      },
      {
        sid: 's3',
        id: "s3_1",
        types: '折扣',
        img: '/img/menus/s3_1.jpg',
        name: '羊肉香菜馅儿',
        notice: '来自关系柳州，算啦双糖',
        sale: 36,
        good: 14,
        oldCost: '30',
        perCost: 10,
        special: '2.93',
        dishNum: 0
      },
      {
        sid: 's3',
        id: "s3_2",
        types: '热销',
        img: '/img/menus/s3_2.jpg',
        name: '猪肉馅儿',
        notice: '来自关系柳州，算啦双糖',
        sale: 37,
        good: 20,
        oldCost: '30',
        perCost: 10,
        special: '2.93',
        dishNum: 0
      }
    ]
    // 我的订单
    var orders = [{
        id: 'o1',
        sid: 's1',
        img: '/img/stores/s1.jpg',
        sname: 'UIMI饭桶（民大店）',
        complete: '订单完成',
        orderLists: [{
          mid: "s1_1",
          name: '招牌花甲米线',
          num: 1,
          cost: 15
        }],
        totalnum: 1,
        cost: 15
      },
      {
        id: 'o2',
        sid: 's1',
        img: '/img/stores/s1.jpg',
        sname: 'UIMI饭桶（民大店）',
        complete: '订单完成',
        orderLists: [{
          mid: "s1_1",
          name: '招牌花甲米线',
          num: 1,
          cost: 15
        }],
        totalnum: 1,
        cost: 15
      },
      {
        id: 'o3',
        sid: 's2',
        img: '/img/stores/s2.jpg',
        sname: '美滋滋火锅冒菜',
        complete: '订单完成',
        orderLists: [{
          mid: "s2_1",
          name: '素冒',
          num: 1,
          cost: 9.9
        }, {
          mid: "s2_3",
          name: '米饭',
          num: 1,
          cost: 1
        }],
        totalnum: 2,
        cost: 10.9
      },
      {
        id: 'o4',
        sid: 's3',
        img: '/img/stores/s3.jpg',
        sname: '东北水饺店（成信店）',
        complete: '订单完成',
        orderLists: [{
          mid: "s3_2",
          name: '猪肉馅儿10个',
          num: 1,
          cost: 10
        }, {
          mid: "s3_1",
          name: '羊肉香菜馅10个',
          num: 1,
          cost: 10
        }],
        totalnum: 2,
        cost: 20
      }
    ]
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.setStorageSync('storesInfo', storesInfo)
    wx.setStorageSync('dishes', dishes)
    wx.setStorageSync('orders', orders)
  },
  globalData: {
    userInfo: null
  }
})
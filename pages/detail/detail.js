//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    menusHeight: 0, //设置在middle高度
    toView: 'to_', //scroll-view定位
    scrollTop: 0, //scroll-view top值
    currentSto: {}, //当前店家信息
    dishes: [], //所有菜单信息
    orderList: [], //购物车信息
    totalcost: 0, //总共消费
    needcost: 0, //还差多少元起送
    totalnum: 0, //总的订单商品数量
    orderDetail: false, //是否显示购物车
    cartSvg: '/img/cart1.svg', //购物车的图片
    left_choosed: '折扣', //左边菜单栏选中情况
    isTypes: true //每种菜单类型显示
  },
  onLoad: function(params) {
    let that = this;
    this.getCurrentSto(params.sid);
    this.getDishes(params.sid)
    wx.setNavigationBarTitle({
      title: this.data.currentSto.name,
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#575757',
    })
    if (params.types == 'onemore') {
      let orders = wx.getStorageSync('orders'),
        dishes = this.data.dishes;
      let order = {},
        needcost, totalcost, totalnum;
      for (let i = 0; i < orders.length; i++) {
        if (orders[i].sid == params.sid) {
          order = JSON.parse(JSON.stringify(orders[i].orderLists));
          totalcost = orders[i].cost;
          totalnum = orders[i].totalnum;
          break;
        }
      }
      // 改变dishnum

      for (let j = 0; j < order.length; j++) {
        for (let i = 0; i < dishes.length; i++) {
          if (dishes[i].id == order[j].mid) {
            console.log(order[j].num);
            dishes[i].dishNum = order[j].num;
            break;
          }
        }
      }
      needcost = (this.data.currentSto.startDispatch - totalcost).toFixed(1);
      this.setData({
        orderList: order,
        dishes,
        totalnum,
        totalcost,
        needcost,
        cartSvg: '/img/cart.svg',
        orderDetail: true
      })
    }
    // 获取系统信息
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        // 可使用窗口宽度、高度
        console.log('height=' + res.windowHeight);
        // 计算主体部分高度,单位为px
        that.setData({
          // second部分高度 = 利用窗口可使用高度 - first部分高度（这里的高度单位为px，所有利用比例将300rpx转换为px）
          menusHeight: res.windowHeight - 176
        })
      }
    })

  },
  //获取当前的店家信息
  getCurrentSto(sid) {
    let storesInfo = wx.getStorageSync('storesInfo');
    for (let i = 0; i < storesInfo.length; i++) {
      if (storesInfo[i].id === sid) {
        this.setData({
          currentSto: storesInfo[i]
        })
      }
    }
  },
  //获取是当前店家的菜单
  getDishes(sid) {
    let dishes = wx.getStorageSync('dishes');
    let dish = [];
    for (let i = 0; i < dishes.length; i++) {
      if (dishes[i].sid === sid) {
        dish.push(dishes[i]);
      }
    }
    this.setData({
      dishes: dish
    })
  },
  // 设置orderlist
  setOrderList(event) {
    let way = event.currentTarget.dataset.way;
    let mid = event.currentTarget.dataset.mid;
    let order = {
        num: 0,
        cost: 0
      },
      dishes = this.data.dishes,
      orderList = this.data.orderList;
    let totalnum = this.data.totalnum,
      totalcost = 0,
      needcost = 0,
      cartSvg = "/img/cart1.svg";
    for (let i = 0; i < dishes.length; i++) {
      if (dishes[i].id === mid) {
        order.mid = dishes[i].id;
        order.perCost = dishes[i].perCost;
        order.name = dishes[i].name;
        order.num = dishes[i].dishNum;
        order.img = dishes[i].img;
        break;
      }
    }
    // 减去菜单
    if (way == 'cut') {
      order.num--;
      totalnum--;
      order.cost = order.perCost * order.num;
      if (!order.num) {
        let index;
        for (let i = 0; i < orderList.length; i++) {
          if (orderList[i].mid == mid) {
            index = i;
            break;
          }
        }
        // 如果num = 0 ,从orderlist删除
        orderList.splice(index, 1);
      }
    }
    // 添加一个order
    if (way == 'add') {
      order.num++;
      totalnum++;
      order.cost = order.perCost * order.num;
      if (order.num == 1) {
        order.id = 'o_' + mid;
        orderList.push(order);
      }
    }
    //将改变的
    for (let i = 0; i < orderList.length; i++) {
      if (orderList[i].mid == mid) {
        orderList[i] = JSON.parse(JSON.stringify(order));
      }
      totalcost += orderList[i].cost;
    }
    totalcost = totalcost.toFixed(1);
    //差多少钱起送
    needcost = (this.data.currentSto.startDispatch - totalcost).toFixed(1);
    // 改变dishnum
    for (let i = 0; i < dishes.length; i++) {
      if (dishes[i].id == mid) {
        console.log(order.num);
        dishes[i].dishNum = order.num;
        break;
      }
    }
    if (totalnum) {
      cartSvg = '/img/cart.svg';
    }
    this.setData({
      orderList,
      dishes,
      totalnum,
      totalcost,
      needcost,
      cartSvg
    })
  },
  // 是否展示购物车的order
  isShowOrders() {
    this.setData({
      orderDetail: !this.data.orderDetail
    })
  },
  // 清空购物车
  clearCart() {
    let dishes = this.data.dishes;
    for (let i = 0; i < dishes.length; i++) {
      dishes[i].dishNum = 0;
    }
    this.setData({
      dishes,
      orderList: [],
      totalnum: 0,
      totalcost: 0,
      needcost: 0,
      orderDetail: false,
      cartSvg: '/img/cart1.svg'
    })
  },
  //左边菜单栏，右边菜单定位设置
  leftChoosed(event) {
    let left_choosed = event.currentTarget.dataset.type;
    let dishes = this.data.dishes,
      toView, id;
    for (let i = 0; i < dishes.length; i++) {
      if (dishes[i].types == left_choosed) {
        id = dishes[i].id;
        break;
      }
    }
    this.setData({
      left_choosed,
      toView: id,
      isTypes: true
    })
  },
  // 去结算，
  payOrders() {
    let payOrders = {
      orderList: this.data.orderList,
      totalcost: this.data.totalcost,
      totalnum: this.data.totalnum,
      currentSto: this.data.currentSto
    };
    wx.setStorageSync('payOrders', payOrders)
  }

})
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    icons_item: [{
        icon: '/img/topbar/t1.png',
        text: '美食'
      },
      {
        icon: '/img/topbar/t2.png',
        text: '美团超市'
      },
      {
        icon: '/img/topbar/t3.png',
        text: '生鲜'
      },
      {
        icon: '/img/topbar/t6.png',
        text: '美团专送'
      },
      {
        icon: '/img/topbar/t2.png',
        text: '跑腿代购'
      },
      {
        icon: '/img/topbar/t5.png',
        text: '晚餐优选'
      },
      {
        icon: '/img/topbar/t4.png',
        text: '甜点饮品'
      },
      {
        icon: '/img/topbar/t7.png',
        text: '家常菜'
      },
      {
        icon: '/img/topbar/t1.png',
        text: '小吃馆'
      },
      {
        icon: '/img/topbar/t7.png',
        text: '快食简餐'
      },
    ],
    storesInfo: {},
    sortChoosed: '1' //判断排序方式
  },
  onLoad: function() {
    this.setData({
      storesInfo: wx.getStorageSync('storesInfo')
    })
  },
  // 排序方式不同,1-综合排序，2-销量最高，3-速度最快
  sortChoose(event) {
    let sortChoosed = event.currentTarget.dataset.type;
    let storesInfo = this.data.storesInfo;
    switch (sortChoosed) {
      case "1":
        storesInfo = wx.getStorageSync('storesInfo');
        break;
      case "2":
      case "3":
        storesInfo = this.changeCopy(sortChoosed);
        break;
      default:
        break;
    }
    this.setData({
      sortChoosed,
      storesInfo
    })
  },
  //销量，速度排序
  changeCopy(types) {
    let storesInfo = this.data.storesInfo;
    // 冒泡排序
    for (let i = 0; i < storesInfo.length; i++) {
      for (let j = 0; j < storesInfo.length - i - 1; j++) {
        // 如果是2，按销售排序
        if (types == "2") {
          if (storesInfo[j + 1].sale > storesInfo[j].sale) {
            let temp = JSON.parse(JSON.stringify(storesInfo[j]));
            storesInfo[j] = JSON.parse(JSON.stringify(storesInfo[j + 1]));
            storesInfo[j + 1] = JSON.parse(JSON.stringify(temp));
          }
        }
        // 如果是3，按速度排序
        if (types == "3") {
          if (storesInfo[j].time > storesInfo[j + 1].time) {
            let temp = JSON.parse(JSON.stringify(storesInfo[j]));
            storesInfo[j] = JSON.parse(JSON.stringify(storesInfo[j + 1]));
            storesInfo[j + 1] = JSON.parse(JSON.stringify(temp));
          }
        }
      }
    }
    return storesInfo;
  }
})
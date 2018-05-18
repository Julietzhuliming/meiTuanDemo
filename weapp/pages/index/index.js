//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.png',
      '/images/swiper02.png',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    menuList:[
      { imgPath: "/images/meishi.png", text: "美食" },
      { imgPath: "/images/maoyan.png", text: "猫眼" },
      { imgPath: "/images/jiudian.png", text: "酒店住宿" },
      { imgPath: "/images/xiuxian.png", text: "休闲娱乐" },
      { imgPath: "/images/waimai.png", text: "外卖" },
      { imgPath: "/images/ktv.png", text: "KTV" },
      { imgPath: "/images/liren.png", text: "丽人" },
      { imgPath: "/images/jindian.png", text: "景点门票" },
      { imgPath: "/images/huochepiao.png", text: "火车票" },
      { imgPath: "/images/mingsu.png", text: "名宿/公寓" },
    ],
    tuijianList:[
      { bg: "/images/tuijianbg.png",tag: "狠优惠", title: "虾皇", desc: "5.6折•美食", tagbg: "/images/bg01.png", meishi: "/images/tuijian.png" },
      { bg: "/images/tuijianbg.png", tag: "有格调", title: "肯德基", desc: "美食", tagbg: "/images/bg02.png", meishi: "/images/tuijian.png" },
      { bg: "/images/tuijianbg.png", tag: "晚餐不将就", title: "蚝味园烧烤渔庄", desc: "烧烤", tagbg: "/images/bg03.png", meishi: "/images/tuijian.png" },
      { bg: "/images/tuijianbg.png", tag: "周末去哪儿", title: "复仇者联盟3：无限战争", desc: "5.6折•美食", tagbg: "/images/bg04.png", meishi: "/images/tuijian.png" }
    ],
    guessLike:"猜你喜欢",
    guesslikeList:[
      { img: "/images/movie.png", title: "大地影院（时代城店）", distance: "13.2km", desc: "[时代城]复仇者联盟3:无限战争（8.6分）正在热映", price: "24.8", link: "寂静之地等3部影片特惠"},
      { img: "/images/movie.png", title: "大地影院（时代城店）", distance: "13.2km", desc: "[时代城]复仇者联盟3:无限战争（8.6分）正在热映", price: "24.8", link: "寂静之地等3部影片特惠" },
      { img: "/images/movie.png", title: "大地影院（时代城店）", distance: "13.2km", desc: "[时代城]复仇者联盟3:无限战争（8.6分）正在热映", price: "24.8", link: "寂静之地等3部影片特惠" },
      { img: "/images/movie.png", title: "大地影院（时代城店）", distance: "13.2km", desc: "[时代城]复仇者联盟3:无限战争（8.6分）正在热映", price: "24.8", link: "寂静之地等3部影片特惠" }
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

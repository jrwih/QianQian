// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList : [
      {
        id : 1,
        img :'https://mp-adb61297-6bf0-439f-bbc0-819881e8b3ee.cdn.bspapp.com/QianQian/static/event01.png',
        url : '/pages/event01/event01'
      },{
        id : 2,
        img :'https://mp-adb61297-6bf0-439f-bbc0-819881e8b3ee.cdn.bspapp.com/QianQian/static/event02.png',
        url : '/pages/event02/event02'
      },{
        id : 3,
        img :'https://mp-adb61297-6bf0-439f-bbc0-819881e8b3ee.cdn.bspapp.com/QianQian/static/event03.png',
        url : '/pages/event03/event03'
      },
    ],
    gridList : [
      {
        id : 0,
        icon : '/static/icon/S_jiankangzixun.svg',
        url : '',
        label : '心理健康咨询'
      },{
        id : 1,
        icon : '/static/icon/S_xinli.svg',
        url : '',
        label : '心理辅导'
      },{
        id : 2,
        icon : '/static/icon/S_xinlizhuanqu.svg',
        url : '',
        label : '课程内容'
      },{
        id : 3,
        icon : '/static/icon/S_ertongxinli.svg',
        url : '',
        label : '儿童心理辅导'
      },{
        id : 4,
        icon : '/static/icon/S_jujiajiance.svg',
        url : '',
        label : '家庭心理辅导'
      },{
        id : 5,
        icon : '/static/icon/S_qingwenzhen.svg',
        url : '/pages/about/about',
        label : '关于我们'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
// pages/sys/sys.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  

  py3:function(){
    wx.navigateTo({
      url: '/pages/py3/py3',
    })

  },
  hls:function(){
    wx.navigateTo({
      url: '/pages/hls/hls',
    })

  },
  data: {
    tipContent: '',
    tipHidden: true
  },
  showTip: function () {
    this.setData({
      tipContent: '该功能暂未上线，敬请期待！',
      tipHidden: false
    });
    setTimeout(() => {
      this.setData({
        tipContent: '',
        tipHidden: true
      });
    }, 2000);
  }
})
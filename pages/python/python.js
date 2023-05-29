// pages/python/python.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalVisible: false, // 控制提示信息的显示隐藏
    modalContent: '', // 提示信息的内容

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 设置计时器，15秒后显示提示信息
    setTimeout(() => {
      this.setData({
        modalVisible: true,
        modalContent: '这是一个提示信息。',
      });
    }, 15000);

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
  s1:function(){
    wx.navigateTo({
      url: '/pages/s1/s1',
    })

  },
  s2:function(){
    wx.navigateTo({
      url: '/pages/s2/s2',
    })

  },
  s3:function(){
    wx.navigateTo({
      url: '/pages/s3/s3',
    })

  },
  s4:function(){
    wx.navigateTo({
      url: '/pages/s4/s4',
    })

  },
  s5:function(){
    wx.navigateTo({
      url: '/pages/s5/s5',
    })

  },
  s6:function(){
    wx.navigateTo({
      url: '/pages/s6/s6',
    })

  },
  s7:function(){
    wx.navigateTo({
      url: '/pages/s7/s7',
    })

  },
  s8:function(){
    wx.navigateTo({
      url: '/pages/s8/s8',
    })

  },
  s9:function(){
    wx.navigateTo({
      url: '/pages/s9/s9',
    })

  },
  s10:function(){
    wx.navigateTo({
      url: '/pages/s10/s10',
    })

  },
  s11:function(){
    wx.navigateTo({
      url: '/pages/s11/s11',
    })

  },
  s12:function(){
    wx.navigateTo({
      url: '/pages/s12/s12',
    })

  },
  qz:function(){
    wx.navigateTo({
      url: '/pages/qz/qz',
    })

  },
  qm:function(){
    wx.navigateTo({
      url: '/pages/qm/qm',
    })

  },

  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: 'Python实验答案',
          
        })
      }, 2000)
    })
    return {
      title: 'Python实验答案',
      path: '/pages/index/index.wxml',
      promise 
    }
  },
  onConfirm: function () {
    // 点击确定按钮后，关闭提示信息
    this.setData({
      modalVisible: false,
    });
  },
  data: {
    showModal: false,
    message: '   由于wxml转义导致用户会复制到缩进转义字符导致代码(针对于有空格缩进的代码)无法运行，所以代码尽量自己照着打一遍，避免复制，(非要复制的话，需要把所有空格缩进删除，自己重新打一遍空格)',
    countdown: 5
  },
  onLoad: function () {
    this.showModal()
    this.countdown()
  },
  showModal: function () {
    this.setData({
      showModal: true
    })
  },
  hideModal: function () {
    this.setData({
      showModal: false
    })
  },
  countdown: function () {
    var that = this
    var intervalId = setInterval(function () {
      var countdown = that.data.countdown
      if (countdown === 0) {
        clearInterval(intervalId)
      } else {
        countdown--
        that.setData({
          countdown: countdown
        })
      }
    }, 1000)
  }
})
// pages/s1/s1.js

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
  



  data: {
    varName: '',
    result: '',
    stdin: '',
    inputLength: 0, // 输入框字符数
    maxInputLength: 1000, // 输入框最大字符数
  },
  onLoad: function () {
    // 注册 onInput 事件处理程序
    this.onInput = function (e) {
      const value = e.detail.value;
      const length = value.length;
      this.setData({
        varName: value,
        inputLength: length,
      });
    };
    this.stdin = function (e) {
      this.setData({
        stdin: e.detail.value,
      });
    };
  },
  onRun: function () {
    wx.request({
      url:
        '填自己的接口，请求头要用https的，域名加入白名单，国内域名需要ICP备案，后端源码在项目里有',
      data: {
        varName: this.data.varName,
        stdin: this.data.stdin,
      },
      success: function (res) {
        console.log(res.data);
        this.setData({
          result: res.data.result,
        });
      }.bind(this),
    });
  },
  

  
  
})

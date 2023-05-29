// pages/hls/hls.js
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

  data: {
    row1: [0, 0, 0, 0],
    row2: [0, 0, 0, 0],
    row3: [0, 0, 0, 0],
    row4: [0, 0, 0, 0],
    result: ''
  },

  onInput1: function (e) {
    const values = e.detail.value.split(',');
    this.setData({
      row1: values.map(v => parseFloat(v))
    });
    this.calculate();
  },

  onInput2: function (e) {
    const values = e.detail.value.split(',');
    this.setData({
      row2: values.map(v => parseFloat(v))
    });
    this.calculate();
  },

  onInput3: function (e) {
    const values = e.detail.value.split(',');
    this.setData({
      row3: values.map(v => parseFloat(v))
    });
    this.calculate();
  },

  onInput4: function (e) {
    const values = e.detail.value.split(',');
    this.setData({
      row4: values.map(v => parseFloat(v))
    });
    this.calculate();
  },

  calculate: function () {
    const r1 = this.data.row1;
    const r2 = this.data.row2;
    const r3 = this.data.row3;
    const r4 = this.data.row4;

    const result =
      (r1[0]*((r2[1]*r3[2]*r4[3]+r3[1]*r4[2]*r2[3]+r4[1]*r2[2]*r3[3])-(r2[3]*r3[2]*r4[1]+r3[3]*r4[2]*r2[1]+r4[3]*r2[2]*r3[1])))-
      (r1[1]*((r2[0]*r3[2]*r4[3]+r3[0]*r4[2]*r2[3]+r4[0]*r2[2]*r3[3])-(r2[3]*r3[2]*r4[0]+r3[3]*r4[2]*r2[0]+r4[3]*r2[2]*r3[0])))+
      (r1[2]*((r2[0]*r3[1]*r4[3]+r3[0]*r4[1]*r2[3]+r4[0]*r2[1]*r3[3])-(r2[3]*r3[1]*r4[0]+r3[3]*r4[1]*r2[0]+r4[3]*r2[1]*r3[0])))-
      (r1[3]*((r2[0]*r3[1]*r4[2]+r3[0]*r4[1]*r2[2]+r4[0]*r2[1]*r3[2])-(r2[2]*r3[1]*r4[0]+r3[2]*r4[1]*r2[0]+r4[2]*r2[1]*r3[0])));

    this.setData({
      result: result.toFixed(2)
    });
  }
  

  

  
})
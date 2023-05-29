Page({
  
  
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
  handleContact (e) {
    console.log(e.detail)
  },
  data: {
    isLogin: false,
    avatarUrl: '',
    nickName: '',
  },

  login: function() {
    var that = this
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: res => {
        that.setData({
          isLogin: true,
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName,
        })
      }
    })
  },

  jumpToPage: function() {
    wx.navigateTo({
      url: '/pages/python/python',
    })
  }

})

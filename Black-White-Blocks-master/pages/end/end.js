var app = getApp()
Page({
  data: {
    currentScore: 0,
    gameType: "",
    heighestScore: 0,
    backUrl: ""
  },
  onLoad: function(options){
    var score = options.score;
    var gameType = options.type;
    var text = {endless: "无尽模式", time: "禅模式", speed: "自由模式"};
    // 从全局变量中获取分数
    this.setData({
      currentScore: app.globalData.currentScore,
      gameType: text[gameType],
      heighestScore: app.globalData[gameType + "Score"],
      backUrl: '../'+gameType+'/play'
    });
  }
})

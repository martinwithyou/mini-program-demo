'use strict';

var _require = require("../../utils/util.js"),
    add = _require.add;

Page({
  data: {
    text: 'test page',
    x: add(1, 2),
    title: '作者昵称：安妮宝贝',
    introduce:'大江大河，这是一部制作精良的电视连续剧',
    content:"大江大河，这是一部制作精良的电视连续剧",
    title_1: '作者昵称：龙应台',
    imgUrls: [
      '../../images/da_1.jpg',
      '../../images/da_2.jpg',
      '../../images/da_3.jpg',
      '../../images/da_4.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  created: function created(options) {
    console.log(options);
    // Do some initialize when page load.
  },
  onReady: function onReady() {
    // console.log(this.selectComponent())
    // Do something when page ready.
  },

  // Event handler.
  viewTap: function viewTap() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    });
  },
  handler: function handler(e) {
    console.log(e);
  },

  customData: {
    hi: 'MINA'
  }
});
// function Tabs() {
//   this.init();
//   this.bindEvents();
// }
//
// Tabs.prototype.init = function () {
//   $('.tabs>ol').each(function (index, element) {
//     $(element).children('li').eq(0).addClass('active');
//   });
// };
// Tabs.prototype.bindEvents = function () {
//   $('.tabs').on('click', '.tabs-bar>li', function (e) {
//     let $li = $(e.currentTarget);
//     let index = $li.index();
//     $li.addClass('active').siblings().removeClass('active');
//     let $content = $li.closest('.tabs').find('.tabs-content>li').eq(index);
//     $content.addClass('active').siblings().removeClass('active');
//   });
// };
class Tabs {
  constructor() {
    this.init();
    this.bindEvents();
  }

  init() {
    $('.tabs>ol').each(function (index, element) {
      $(element).children('li').eq(0).addClass('active');
    });
  }

  bindEvents() {
    $('.tabs').on('click', '.tabs-bar>li', function (e) {
      let $li = $(e.currentTarget);
      let index = $li.index();
      $li.addClass('active').siblings().removeClass('active');
      let $content = $li.closest('.tabs').find('.tabs-content>li').eq(index);
      $content.addClass('active').siblings().removeClass('active');
    });
  }
}

$(document).ready(
  function () {
    new Tabs();
  },
);

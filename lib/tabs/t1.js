// var tabs = new Tabs('.tabs');
var $tabs = $('.tabs-bar>li');
$(document).ready(function () {
  $('.tabs').on('click', '.tabs-bar>li', function (e) {
    let $li = $(e.currentTarget);
    console.log($li);
    $li.addClass('active').siblings().removeClass('active');
    let index = $li.index();
    let $content = $li.closest('.tabs').find('.tabs-content>li').eq(index);
    $content.addClass('active').siblings().removeClass('active');
  });
});

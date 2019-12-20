$(document).ready(function Tabs() {
  $('.tabs>ol').each(function (index, element) {
    $(element).children('li').eq(0).addClass('active');
  });
  $('.tabs').on('click', '.tabs-bar>li', function (e) {
    let $li = $(e.currentTarget);
    let index = $li.index();
    $li.addClass('active').siblings().removeClass('active');
    let $content = $li.closest('.tabs').find('.tabs-content>li').eq(index);
    $content.addClass('active').siblings().removeClass('active');
  });
});

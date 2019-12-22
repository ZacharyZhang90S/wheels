let buttonOffset = $('button').offset();
let topbarOffset = $('#topbar').offset();
$(window).on('scroll', function () {
  let scrollY = window.scrollY;
  if (scrollY > topbarOffset.top) {
    $('#topbar').addClass('sticky');
  } else {
    $('#topbar').removeClass('sticky');
  }
  if (scrollY + 100 > buttonOffset.top) {
    $('button').addClass('sticky');
  } else {
    $('button').removeClass('sticky');
  }
});

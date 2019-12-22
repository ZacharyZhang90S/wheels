// let buttonOffset = $('button').offset();
// let topbarOffset = $('#topbar').offset();
// $(window).on('scroll', function () {
//   let scrollY = window.scrollY;
//   if (scrollY > topbarOffset.top) {
//     $('#topbar').addClass('sticky');
//   } else {
//     $('#topbar').removeClass('sticky');
//   }
//   if (scrollY + 100 > buttonOffset.top) {
//     $('button').addClass('sticky');
//   } else {
//     $('button').removeClass('sticky');
//   }
// });

class Sticky {
  constructor(selector, n) {
    this.elements = $(selector);
    this.offset = n || 0;
    this.offsets = [];
    this.addPlaceholder();
    this.cacheOffsets();
    this.listenToScroll();
  }

  addPlaceholder() {
    this.elements.each((index, element) => {
      $(element).wrap(`<div class="placeholderWrapper"></div>`)
        .parent().height($(element).height());
    });
  }

  cacheOffsets() {
    this.elements.each((index, element) => {
      this.offsets[index] = $(element).offset().top;
    });
  }

  listenToScroll() {
    $(window).on('scroll', () => {
      let scrollY = window.scrollY;
      this.elements.each((index, element) => {
        if (scrollY + this.offset > this.offsets[index]) {
          $(element).addClass('sticky')
            .css({top: this.offset});
        } else {
          $(element).removeClass('sticky');
        }
      });
    });
  }
}

new Sticky('#topbar');
new Sticky('button', 100);

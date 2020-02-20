$(document).ready(function() {
  $('.image-carousel').slick({
    slidesToShow: 1,
    infinite: true,
    dots: false,
    autoplay: false,
    prevArrow:
      '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.36 51.35"><defs><style>.a{fill:none;stroke:#6b7079;stroke-miterlimit:10;stroke-width:2px;}</style></defs><title>arrow</title><polyline class="a" points="24.3 0.68 1.36 25.68 24.3 50.68"/><line class="a" x1="1.69" y1="25.68" x2="51.36" y2="25.68"/></svg>',

    nextArrow:
      '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.36 51.35"><defs><style>.a{fill:none;stroke:#6b7079;stroke-miterlimit:10;stroke-width:2px;}</style></defs><title>arrow</title><polyline class="a" points="27.06 50.68 50 25.68 27.06 0.68"/><line class="a" x1="49.66" y1="25.68" y2="25.68"/></svg>'
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //     $('.image-carousel').slick('unslick');

    //   }
    //   }
    // ]
  });

  // $('body').on('mousemove', function(event) {
  //   console.log(event.pageY);
  //   console.log(event.pageX);
  // });

  //   prevArrow:
  //   '<div class="button-area-prev"><svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.36 51.35"><defs><style>.a{fill:none;stroke:#6b7079;stroke-miterlimit:10;stroke-width:2px;}</style></defs><title>arrow</title><polyline class="a" points="24.3 0.68 1.36 25.68 24.3 50.68"/><line class="a" x1="1.69" y1="25.68" x2="51.36" y2="25.68"/></svg></div>',

  //     nextArrow:
  //   '<div class="button-area-next"><svg class="slick-next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.36 51.35"><defs><style>.a{fill:none;stroke:#6b7079;stroke-miterlimit:10;stroke-width:2px;}</style></defs><title>arrow</title><polyline class="a" points="27.06 50.68 50 25.68 27.06 0.68"/><line class="a" x1="49.66" y1="25.68" y2="25.68"/></svg></div>'
  // });
});

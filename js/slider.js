$(document).ready(function() {
  $('.image-carousel').slick({
    slidesToShow: 1,
    infinite: true,
    dots: false,
    autoplay: false,
    prevArrow:
      '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.36 121.35"><defs><style>.a{fill:none;stroke:#6b7079;stroke-miterlimit:10;stroke-width:2px;}</style></defs><title>arrow</title><polyline class="a" points="56.42 0.68 1.36 60.68 56.42 120.68"/><line class="a" x1="2.17" y1="60.68" x2="121.36" y2="60.68"/></svg>',
    nextArrow:
      '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.36 121.35"><defs><style>.a{fill:none;stroke:#6b7079;stroke-miterlimit:10;stroke-width:2px;}</style></defs><title>arrow</title><polyline class="a" points="64.94 120.68 120 60.68 64.94 0.68"/><line class="a" x1="119.19" y1="60.68" y2="60.68"/></svg>'
  });
});

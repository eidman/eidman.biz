$(document).ready(function() {
  $('.image-carousel').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: false,
    autoplay: false,
    prevArrow:
      '<img class="slick-prev arrow" src="../../assets/arrow-left.svg">',
    nextArrow:
      '<img class="slick-next arrow" src="../../assets/arrow-right.svg">'
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       fade: true
    //     }
    //   }
    // ]
  });
});

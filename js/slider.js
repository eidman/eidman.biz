document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('load', function() {
    flkty.resize();
  });

  var carousel = document.querySelector('.carousel');
  var carouselCounter = document.querySelector('.carousel-counter');
  var flkty = new Flickity(carousel, {
    imagesLoaded: true,
    initialIndex: 0,
    wrapAround: true,
    pageDots: false,
    // fullScreen: true,
    lazyLoad: false,
    watchCSS: true,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 65,
      y2: 45,
      x3: 20
    }
  });

  // var flkty = $gallery.data('flickity');
  // // load all lazy load images
  // if (!flkty.isActive) {
  //   $gallery.find('[data-flickity-lazyload]').each(function (i, elem) {
  //     var $elem = $(elem);
  //     $elem.attr('src', $elem.attr('data-flickity-lazyload'));
  //     $elem.addClass('flickity-lazyloaded');
  //     elem.removeAttribute('data-flickity-lazyload');
  //   });

  let slide = document.querySelectorAll('.carousel-cell-image');
  // load all lazy load images
  if (matchMedia('screen and (max-width: 868px)').matches) {
    slide.forEach(function(image) {
      // image.addClass('flickity-lazyloaded');
      image.removeAttribute('data-flickity-lazyload');
    });
  }

  // if (matchMedia('screen and (max-width: 768px)').matches) {
  //   var flkty = new Flickity(carousel, {
  //     selectedAttraction: 0.3,
  //     friction: 1
  //     draggable: false,
  //     arrowShape: {
  //       x0: 10,
  //       x1: 60,
  //       y1: 50,
  //       x2: 70,
  //       y2: 40,
  //       x3: 30
  //     }
  //   });
  // }

  var previousSlide = document.querySelector('.previous-big-button');
  var nextSlide = document.querySelector('.next-big-button');

  if (matchMedia('screen and (min-width: 769px)').matches) {
    previousSlide.addEventListener('click', function() {
      flkty.previous();
    });
    nextSlide.addEventListener('click', function() {
      flkty.next();
    });

    function updateStatus() {
      var slideNumber = flkty.selectedIndex + 1;
      carouselCounter.textContent = slideNumber + '/' + flkty.slides.length;
    }
    updateStatus();

    flkty.on('select', updateStatus);
  }
});

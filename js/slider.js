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

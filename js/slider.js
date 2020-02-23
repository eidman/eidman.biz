document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelector('.carousel');
  var flkty = new Flickity(elem, {
    // options
    wrapAround: true,
    pageDots: false,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 65,
      y2: 45,
      x3: 20
    }
  });

  var carouselCounter = document.querySelector('.carousel-counter');

  function updateStatus() {
    var slideNumber = flkty.selectedIndex + 1;
    carouselCounter.textContent = slideNumber + '/' + flkty.slides.length;
  }
  updateStatus();

  flkty.on('select', updateStatus);
});

// prevArrow:
// '<svg class="slick-prev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.36 51.35"><defs><style>.a{fill:none;stroke:#6b7079;stroke-miterlimit:10;stroke-width:2px;}</style></defs><title>arrow</title><polyline class="a" points="24.3 0.68 1.36 25.68 24.3 50.68"/><line class="a" x1="1.69" y1="25.68" x2="51.36" y2="25.68"/></svg>',

//   nextArrow:
// '<svg class="slick-next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.36 51.35"><defs><style>.a{fill:none;stroke:#6b7079;stroke-miterlimit:10;stroke-width:2px;}</style></defs><title>arrow</title><polyline class="a" points="27.06 50.68 50 25.68 27.06 0.68"/><line class="a" x1="49.66" y1="25.68" y2="25.68"/></svg>'

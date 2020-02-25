document.addEventListener('DOMContentLoaded', function() {
  var carousel = document.querySelector('.carousel');
  var flkty = new Flickity(carousel, {
    // options
    wrapAround: true,
    pageDots: false,
    arrowShape: {
      // 'M51.36,26.68H3.64L25.04,50l-1.47,1.36L0,25.68L23.57,0l1.47,1.36L3.64,24.68h47.72V26.68z'
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

  var previousSlide = document.querySelector('.previous-big-button');
  var nextSlide = document.querySelector('.next-big-button');

  previousSlide.addEventListener('click', function() {
    flkty.previous();
  });
  nextSlide.addEventListener('click', function() {
    flkty.next();
  });
});

// // ADVANCE SLIDE ON CLICK
// var $carousel = $('.carousel').flickity({
//   initialIndex: 1
// });
// var flick = $carousel.data('flickity');

// $carousel.on('staticClick.flickity', function (
//   event,
//   pointer,
//   cellElement,
//   cellIndex
// ) {
//   // dismiss if cell was not clicked
//   if (!cellElement) {
//     return;
//   }
//   // go to next if current cell selected
//   if (cellIndex == flick.selectedIndex) {
//     $carousel.flickity('next');
//   } else {
//     $carousel.flickity('select', cellIndex);
//   }
// });

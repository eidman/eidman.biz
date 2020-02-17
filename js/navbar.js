document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger');
  var navMenu = document.querySelector('.nav-menu-container');

  hamburger.addEventListener('click', function() {
    hamburger.classList.add('is-active');
    navMenu.classList.add('show');
  });
});

// document.addEventListener('DOMContentLoaded', function () {
//     let hamburger = document.querySelectorAll('.hamburger');
//     let navMenu = document.querySelector('.nav-menu-container');

//     hamburger.forEach(function (button) {
//         button.addEventListener('click', function () {
//             hamburger.classList.add('is-active');
//             navMenu.classList.add('show');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu-container');

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

document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger');
  var navMenu = document.querySelector('.nav-menu-container');
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('show');
  });
});

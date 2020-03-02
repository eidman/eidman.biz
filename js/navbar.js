document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu-container');
  const scrollY = document.body.style.top;

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('show');
  });
});

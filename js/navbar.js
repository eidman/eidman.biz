document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu-container');
  const scrollY = document.body.style.top;

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('show');
  });

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

document.addEventListener('DOMContentLoaded', function() {
  let x = 1000;
  var screen = window.matchMedia('(min-width: 768px)');

  if (screen.matches) {
    // If media query matches
    clock();

    function clock() {
      const date = new Date();

      const hours = ((date.getHours() + 11) % 12) + 1;
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const hour = hours * 30;
      const minute = minutes * 6;
      const second = seconds * 6;

      document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
      document.querySelector(
        '.minute'
      ).style.transform = `rotate(${minute}deg)`;
      document.querySelector(
        '.second'
      ).style.transform = `rotate(${second}deg)`;
    }

    setInterval(clock, x);
  }
});

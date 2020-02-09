document.addEventListener('DOMContentLoaded', function() {
  let x = 1000;

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
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
    document.querySelector('.second').style.transform = `rotate(${second}deg)`;
  }

  setInterval(clock, x);
});

// clock2
//   (function() {
//     //generate clock animations
//     var now = new Date(),
//       hourDeg = (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30,
//       minuteDeg = (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6,
//       secondDeg = (now.getSeconds() / 60) * 360,
//       stylesDeg = [
//         '@-webkit-keyframes rotate-hour{from{transform:rotate(' +
//           hourDeg +
//           'deg);}to{transform:rotate(' +
//           (hourDeg + 360) +
//           'deg);}}',
//         '@-webkit-keyframes rotate-minute{from{transform:rotate(' +
//           minuteDeg +
//           'deg);}to{transform:rotate(' +
//           (minuteDeg + 360) +
//           'deg);}}',
//         '@-webkit-keyframes rotate-second{from{transform:rotate(' +
//           secondDeg +
//           'deg);}to{transform:rotate(' +
//           (secondDeg + 360) +
//           'deg);}}',
//         '@-moz-keyframes rotate-hour{from{transform:rotate(' +
//           hourDeg +
//           'deg);}to{transform:rotate(' +
//           (hourDeg + 360) +
//           'deg);}}',
//         '@-moz-keyframes rotate-minute{from{transform:rotate(' +
//           minuteDeg +
//           'deg);}to{transform:rotate(' +
//           (minuteDeg + 360) +
//           'deg);}}',
//         '@-moz-keyframes rotate-second{from{transform:rotate(' +
//           secondDeg +
//           'deg);}to{transform:rotate(' +
//           (secondDeg + 360) +
//           'deg);}}'
//       ].join('');

//     document.getElementById('clock-animations').innerHTML = stylesDeg;
//   })();
// });

document.addEventListener('DOMContentLoaded', function() {
  let infoButton = document.querySelectorAll('.info-button');
  let textModal = document.querySelector('.text-page-container');

  infoButton.forEach(function(button) {
    button.addEventListener('click', function() {
      textModal.classList.toggle('show');
    });
  });
});

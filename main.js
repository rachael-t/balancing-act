var closeWindow = document.querySelector('.welcome-banner');
var closeButton = document.querySelector('.close-box');

closeButton.addEventListener('click',remove);

function remove() {
  closeWindow.classList.add('poof');
}

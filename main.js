//notes from class to remember:
// declare the variable
// add the eventlistener -- element.addEventListener('event type', eventHandlerFn)
// add the function statement "do this"/instruction
//asign a variable - innerText/innerHTML - assignment operator - what we want the change to be

var closeWindow = document.querySelector('.welcome-banner');
var closeButton = document.querySelector('.close-box');
var dashboardIcon = document.querySelector('.nav-dashboard');
var transactionsIcon = document.querySelector('.nav-transactions');
var profileIcon = document.querySelector('.nav-profile');
var dashboardPage = document.querySelector('.dashboard-page');
var transactionsPage = document.querySelector('.transactions-page');
var profilePage = document.querySelector('.profile-page');
var navBar = document.querySelector('.nav-list');


closeButton.addEventListener('click',remove);
navBar.addEventListener('click', movePage);


function remove() {
  closeWindow.classList.add('hide-welcome');
}

function movePage(event){
  if (event.target.classList.contains('nav-icon-dashboard')) {
    moveToDashboard();
  } else if (event.target.classList.contains('nav-icon-transactions')) {
    moveToTransactions();
  } else if (event.target.classList.contains('nav-icon-profile')) {
    moveToProfile();
  }
}

function moveToDashboard() {
  dashboardIcon.classList.add('highlight-border');
  transactionsIcon.classList.remove('highlight-border');
  profileIcon.classList.remove('highlight-border');
  dashboardPage.classList.remove('hide-page');
  transactionsPage.classList.add('hide-page');
  profilePage.classList.add('hide-page');
}

function moveToTransactions() {
  dashboardIcon.classList.remove('highlight-border');
  transactionsIcon.classList.add('highlight-border');
  profileIcon.classList.remove('highlight-border');
  dashboardPage.classList.add('hide-page');
  transactionsPage.classList.remove('hide-page');
  profilePage.classList.add('hide-page');
}

function moveToProfile() {
  dashboardIcon.classList.remove('highlight-border');
  transactionsIcon.classList.remove('highlight-border');
  profileIcon.classList.add('highlight-border');
  dashboardPage.classList.add('hide-page');
  transactionsPage.classList.add('hide-page');
  profilePage.classList.remove('hide-page');
}

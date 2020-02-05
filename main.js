//notes from class to remember:
// declare the variable
// add the eventlistener -- element.addEventListener('event type', eventHandlerFn)
// add the function statement "do this"/instruction
//asign a variable - innerText/innerHTML - assignment operator - what we want the change to be

var closeWindow = document.querySelector('.welcome-banner');
var closeButton = document.querySelector('.close-box');

closeButton.addEventListener('click',remove);

function remove() {
  closeWindow.classList.add('hide-welcome');
}

//interpretation of user story:
// the user clicks on the wallet and then 'moves' to that new transactions page.
//with that one click, the side bar changes location, old page goes away, new page appears
//old main will have a class of dashboard and the new main will have a class of transactions to better align with the comp and user story.

var dashboardIcon = document.querySelector('.nav-dashboard');
var transactionsIcon = document.querySelector('.nav-transactions');
var profileIcon = document.querySelector('.nav-profile');
var dashboardPage = document.querySelector('.dashboard-page');
var transactionsPage = document.querySelector('.transactions-page');
var profilePage = document.querySelector('.profile-page');

dashboardIcon.addEventListener('click',moveToDashboard);

function moveToDashboard() {
  dashboardIcon.classList.add('highlight-border');
  transactionsIcon.classList.remove('highlight-border');
  profileIcon.classList.remove('highlight-border');
  dashboardPage.classList.remove('hide-page');
  transactionsPage.classList.add('hide-page');
  profilePage.classList.add('hide-page');
}

transactionsIcon.addEventListener('click',moveToTransactions);

function moveToTransactions() {
  dashboardIcon.classList.remove('highlight-border');
  transactionsIcon.classList.add('highlight-border');
  profileIcon.classList.remove('highlight-border');
  dashboardPage.classList.add('hide-page');
  transactionsPage.classList.remove('hide-page');
  profilePage.classList.add('hide-page');
}

profileIcon.addEventListener('click',moveToProfile);

function moveToProfile() {
  dashboardIcon.classList.remove('highlight-border');
  transactionsIcon.classList.remove('highlight-border');
  profileIcon.classList.add('highlight-border');
  dashboardPage.classList.add('hide-page');
  transactionsPage.classList.add('hide-page');
  profilePage.classList.remove('hide-page');
}

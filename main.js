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
// the hover in the css for the clipboard will need to be removed - it should just chill there indicating to the user that they are at that page that the icon represents. so with this new user story we are having the user click on the wallet and then 'move' to that new transactions page.
//with that one click, the side bar changes location, old page goes away, new page appears
//old main will have a class of dashboard and the new main will have a class of transactions to better align with the comp and user story.

//the how:
//for the nav bar: declare all three variables, add event listeners for click on each, and then I think I want to do three functions - one that removes the bar for two and adds to one and repeat for each bar.
//for the content change: declare variable for each "main section", add event listeners for each (right now just dashboard and transactions), then add a function that has it when the wallet/transactions button is clicked, main-dashboard is removed and main-transactions appears.

//another option. have two functions. one is just encompassing what happens when dashboard is clicked (remove the sidebar for transactions and profile add to dashboard, then show main-dashboard and hide main-transactions) and another for what happens when transactions is clicked (remove the sidebar for bashboard and profile and add to transactions, then hide main-dashboard and show main-transactions)
//THIS IS WHAT I DECIDED TO GO WITH TO BE "DRY"

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

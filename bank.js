var sendMoneyBtnCheck = document.getElementById('button-deposit'); //button that send the money to display
var userInputChecking = document.getElementById('money-value'); //input box where you type money
var moneyChecking = document.querySelector('.checkingValue span'); //div where show ammount money
var withdrawMoneyBtnCheck = document.getElementById('button-withdraw');
var changeColorChecking = document.querySelector('.checking');


var sendMoneyBtnSaving = document.getElementById('button-deposit-saving');
var userInputSaving = document.getElementById('money-value1');
var moneySaving = document.querySelector('.savingsValue span');
var withdrawMoneyBtnSaving = document.getElementById('button-withdraw-saving');
var changeColorSaving = document.querySelector('.savings');

var totalChecking = 0;

var totalSaving = 0;

var updateDisplayFigures = function(){
  moneySaving.textContent = totalSaving;
  moneyChecking.textContent = totalChecking;
  userInputChecking.value = '';
  userInputSaving.value = '';
}

// this is for the checking account
sendMoneyBtnCheck.addEventListener('click', function() {
  totalChecking += Number(userInputChecking.value);
  updateDisplayFigures();
  if (totalChecking > 0) {
    changeColorChecking.style.backgroundColor = 'mistyrose';
  }
})

withdrawMoneyBtnCheck.addEventListener('click', function(event) {
  if(userInputChecking.value <= totalChecking) {
    totalChecking -= Number(userInputChecking.value);
    updateDisplayFigures();
    if (totalChecking === 0) {
      changeColorChecking.style.backgroundColor = 'red';
    }
  }
})




// this is for saving account
sendMoneyBtnSaving.addEventListener('click', function() {
  if (userInputSaving.value > totalChecking) {
    alert('insufficient funds');
  } else {
    console.log('allow transaction');
    totalSaving += Number(userInputSaving.value);
    totalChecking -= Number(userInputSaving.value);
    updateDisplayFigures();
  }
})

withdrawMoneyBtnSaving.addEventListener('click', function(event) {
  if(userInputSaving.value <= totalSaving) {
    totalChecking += Number(userInputSaving.value);
    totalSaving -= Number(userInputSaving.value);
    updateDisplayFigures();
    if (totalChecking === 0) {
      changeColorSaving.style.backgroundColor = 'red';
    }
  }
})

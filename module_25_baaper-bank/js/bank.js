document.getElementById('deposit-submit').addEventListener('click', function () {
    // get the deposit amount input
    var depositInput = document.getElementById('deposit-amount');
    var depositAmount = depositInput.value;

    // get available deposit total balance 
    var currentDeposit = document.getElementById('deposit-total');

    // update deposite amount 

    var currentBalance = parseFloat(currentDeposit.innerHTML);
    currentBalance += parseFloat(depositAmount);
    currentDeposit.innerHTML = '' + currentBalance;


    // update balance amount 
    var balanceField = document.getElementById('balance-total');
    var balanceAmount = parseFloat(balanceField.innerHTML);

    balanceAmount += parseFloat(depositAmount);
    balanceField.innerHTML = '' + balanceAmount;

    depositInput.value = '';
})


document.getElementById('withdraw-submit').addEventListener('click', function () {
    // get the withdraw amount input
    var withdrawInput = document.getElementById('withdraw-amount');
    var withdrawAmount = withdrawInput.value;

    // get available deposit total balance 
    var currentWithdraw = document.getElementById('withdraw-total');

    var currentWithdrawBalance = parseFloat(currentWithdraw.innerHTML);
    currentWithdrawBalance += parseFloat(withdrawAmount);
    currentWithdraw.innerHTML = '' + currentWithdrawBalance;

    // update balance amount 
    var balanceField = document.getElementById('balance-total');
    var balanceAmount = parseFloat(balanceField.innerHTML);

    balanceAmount -= parseFloat(withdrawAmount);
    balanceField.innerHTML = '' + balanceAmount;

    withdrawInput.value = '';
})
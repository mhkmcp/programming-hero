function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const inputAmount = parseFloat(inputValue);
    inputField.value = '';
    if (!isNaN(inputAmount))
        return inputAmount;
    else return 0;
}

function updateBalance(displayId, inputBalance) {
    const currentDeposit = document.getElementById(displayId);
    var currentBalance = parseFloat(currentDeposit.innerText);
    if (!isNaN(inputBalance)) {
        currentBalance += inputBalance;
        currentDeposit.innerText = currentBalance;
    }
}

document.getElementById('deposit-submit').addEventListener('click', function () {
    // get the deposit amount input
    const depositAmount = getInputValue('deposit-amount');

    // update deposit display
    updateBalance('deposit-total', depositAmount);

    // update balance display
    updateBalance('balance-total', depositAmount);
})

document.getElementById('withdraw-submit').addEventListener('click', function () {
    // get the withdraw amount input
    const withdrawAmount = getInputValue('withdraw-amount');

    // update withdraw display
    updateBalance('withdraw-total', withdrawAmount);

    // update balance display
    updateBalance('balance-total', -withdrawAmount);
})
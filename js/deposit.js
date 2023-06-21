// step 1 : add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    
    // step 2 : get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount)

    const newDeposit = document.getElementById('newDeposit-total');
    const writeNewDeposit = newDeposit.innerText;
    newDeposit.innerText = newDepositAmount;

    //get the current deposit total
    //for not-input(element other than input, textarea ) use the innerText to get the text

    const depositTotalElement = document.getElementById('previous-deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // console.log(depositTotal)
    depositTotalElement.innerText = newDepositAmount;
})
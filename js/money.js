document.getElementById("btn-calculate").addEventListener("click", function() {
    // income field
    const incomeField = document.getElementById("income-field");
    const incomeString = incomeField.value;
    const income = parseInt(incomeString);

    // food field
    const foodField = document.getElementById("food-field");
    const foodString = foodField.value;
    const food = parseInt(foodString);

    // rent field
    const rentField = document.getElementById("rent-field");
    const rentString = rentField.value;
    const rent = parseInt(rentString);

    // clothes field
    const clothesField = document.getElementById("clothes-field");
    const clothesString = clothesField.value;
    const clothes = parseInt(clothesString);

    // previous Expenses
    const totalExpensesElement = document.getElementById("total-expenses");
    const previousExpensesString = totalExpensesElement.innerText;
    const previousExpenses = parseFloat(previousExpensesString);

    // previous Balance
    const balanceElement = document.getElementById("balance-total");
    const previousBalanceString = balanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    // Calculation:
    const newEXpensesTotal = food + rent + clothes;
    // set new expenses value:
    totalExpensesElement.innerText = newEXpensesTotal;

    // new balance total:
    const newBalanceTotal = income - newEXpensesTotal;

    const warning = document.getElementById("warning");

    if (newEXpensesTotal > income) {
        alert("Your income amount is very poor");
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
        // set new balance total:
        balanceElement.innerText = newBalanceTotal;
    }

})

document.getElementById("btn-save").addEventListener("click", function() {
    // saveMoneyField
    const saveMoneyField = document.getElementById("save-field");
    const saveMoneyPercentString = saveMoneyField.value;
    const saveMoneyPercent = parseFloat(saveMoneyPercentString);

    // savingAmountElement
    const savingAmountElement = document.getElementById("saving-amount");
    const previousSavingAmountString = savingAmountElement.innerText;
    const previousSavingAmount = parseFloat(previousSavingAmountString);

    // remainingBalanceElement
    const remainingBalanceElement = document.getElementById("remaining-balance");
    const previousRemainingBalanceString = remainingBalanceElement.innerText;
    const previousRemainingBalance = parseFloat(previousRemainingBalanceString);

    // balance
    const balanceElement = document.getElementById("balance-total");
    const previousBalanceString = balanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    // Calculate Saving Amount:
    const newSavingAmount = (previousBalance / 100) * saveMoneyPercent;
    // set SAving Amount:
    savingAmountElement.innerText = newSavingAmount;

    // Calculate Remaining Balance:
    const newRemainingBalance = previousBalance - newSavingAmount;
    // set Remaining Balance:
    remainingBalanceElement.innerText = newRemainingBalance
})
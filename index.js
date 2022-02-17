// javaScript Start
document.getElementById('calculation').addEventListener('click', function () {
    const inputFood = document.getElementById('food-value');
    const inputFoodBDT = inputFood.value;
    const foodValue = parseFloat(inputFoodBDT);
    inputFood.value = '';
    const inputRent = document.getElementById('rent-value');
    const inputRentBDT = inputRent.value;
    const rentValue = parseFloat(inputRentBDT);
    inputRent.value = '';
    const inputClothes = document.getElementById('clothes-value');
    const inputClothesBDT = inputClothes.value;
    const clothesValue = parseFloat(inputClothesBDT);
    inputClothes.value = '';
    const totalCost = foodValue + rentValue + clothesValue;
    const totalExpense = document.getElementById('total-expenses');
    totalExpense.innerText = totalCost;
    const inputIncome = document.getElementById('income-value');
    const incomeBDT = inputIncome.value;
    const inputValue = parseFloat(incomeBDT);
    inputIncome.value = '';
    const getBalance = inputValue - totalCost;
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = getBalance;
    // input empty
    // inputFood.value = '';
    // inputRent.value = '';
    // inputClothes.value = '';
    // inputIncome.value = '';


});
document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input');
    const saveAmount = saveInput.value;
    console.log(saveAmount);
    saveInput.value = '';

});


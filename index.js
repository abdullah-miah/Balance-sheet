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
    const getBalance = inputValue - totalCost;
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = getBalance;
});
document.getElementById('save-button').addEventListener('click', function () {
    const inputIncome = document.getElementById('income-value');
    const incomeBDT = inputIncome.value;
    const inputValue = parseFloat(incomeBDT);
    const saveInput = document.getElementById('save-input');
    const saveAmount = saveInput.value;
    saveInput.value = '';
    const savecal = inputValue / 100;
    const saveCalculation = savecal * saveAmount;
    const totalSave = document.getElementById('save-total');
    totalSave.innerText = saveCalculation;
    const getTotalBalance = document.getElementById('total-balance');
    const totalBalance = getTotalBalance.innerText;
    const getBalance = parseFloat(totalBalance);
    const ReaminingBalance = document.getElementById('Reamining-bal');
    ReaminingBalance.innerText = getBalance - saveCalculation;
});


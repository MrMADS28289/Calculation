// Get expenses total
function getCost(costFor) {
    const costInput = document.getElementById(costFor + '-input').value;
    const cost = parseFloat(costInput);
    return cost;
}
// Get total expenses
function getTotalExpenses() {
    const foodCost = getCost('food');
    const rentCost = getCost('rent');
    const clothesCost = getCost('clothes');
    if (isNaN(foodCost) != 0) {
        document.getElementById('food-erorr').style.display = 'block';
        document.getElementById('rent-erorr').style.display = 'none';
        document.getElementById('clothes-erorr').style.display = 'none';
        foodCost = '';
    }
    else if (isNaN(rentCost) != 0) {
        document.getElementById('rent-erorr').style.display = 'block';
        document.getElementById('clothes-erorr').style.display = 'none';
        document.getElementById('food-erorr').style.display = 'none';
        rentCost = '';
    }
    else if (isNaN(clothesCost) != 0) {
        document.getElementById('clothes-erorr').style.display = 'block';
        document.getElementById('food-erorr').style.display = 'none';
        document.getElementById('rent-erorr').style.display = 'none';
        clothesCost = '';
    }
    else {
        const totalExpenses = foodCost + rentCost + clothesCost;
        return totalExpenses;
    }
}
function getIncomeAmount() {
    const incomeInput = document.getElementById('income-input').value;
    const income = parseFloat(incomeInput);
    return income;
}
// Get cost and balence updated
function getUpdated() {
    // Update total expenses
    const totalExpensesText = document.getElementById('total-expenses');
    const totalExpenses = getTotalExpenses();
    totalExpensesText.innerText = totalExpenses;
    // Update remaining balance
    const balanceText = document.getElementById('balance');
    balanceText.innerText = getIncomeAmount() - totalExpenses;
}
// Update savings
document.getElementById('save-btn').addEventListener('click', function () {
    const savePersentes = parseFloat(document.getElementById('save-input').value);
    const remainingBalance = document.getElementById('remaining-balance');
    const balanceText = document.getElementById('balance');
    const balance = parseFloat(balanceText.innerText)
    const saveAmount = document.getElementById('save-amount');
    const saveings = (savePersentes * getIncomeAmount()) / 100;
    saveAmount.innerText = saveings;
    remainingBalance.innerText = balance - saveings;
})
// Expenses calculating
document.getElementById('calculat-btn').addEventListener('click', function () {
    getUpdated()
})
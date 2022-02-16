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
    const totalExpenses = foodCost + rentCost + clothesCost;
    return totalExpenses;
}
// Expenses calculating
document.getElementById('calculat-btn').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input').value;
    const income = parseFloat(incomeInput);

    const totalCostText = document.getElementById('total-expenses');
    const totalCost = parseFloat(totalCostText);
    const totalExpenses = getTotalExpenses();
    totalCostText.innerText = totalExpenses;

    const remainingBalanceText = document.getElementById('remaining-balance');
    const remainingBalance = parseFloat(remainingBalanceText.innerText)
    remainingBalanceText.innerText = income - totalExpenses;
})
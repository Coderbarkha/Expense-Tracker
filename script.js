// script.js
document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalExpensesElement = document.getElementById('total-expenses');
  
    let totalExpenses = 0;
  
    // Add expense to the list
    expenseForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const expenseName = expenseNameInput.value.trim();
      const expenseAmount = parseFloat(expenseAmountInput.value);
  
      if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter a valid expense name and amount.');
        return;
      }
  
      // Add expense to the list
      const expenseItem = document.createElement('li');
      expenseItem.innerHTML = `
        ${expenseName}: $<span>${expenseAmount.toFixed(2)}</span>
        <button class="delete-btn">Delete</button>
      `;
  
      // Delete expense functionality
      expenseItem.querySelector('.delete-btn').addEventListener('click', () => {
        totalExpenses -= expenseAmount;
        totalExpensesElement.textContent = totalExpenses.toFixed(2);
        expenseItem.remove();
      });
  
      expenseList.appendChild(expenseItem);
  
      // Update total expenses
      totalExpenses += expenseAmount;
      totalExpensesElement.textContent = totalExpenses.toFixed(2);
  
      // Clear form inputs
      expenseNameInput.value = '';
      expenseAmountInput.value = '';
    });
  });
  
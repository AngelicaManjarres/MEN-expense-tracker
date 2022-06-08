const Expense = require('../model/expenseModel')

function addExpense(title, amount) {
    let expense = new Expense({title: title, amount: amount})
    expense.save()

}

module.exports = addExpense
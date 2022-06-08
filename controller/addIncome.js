const mongoose = require('mongoose')
const Income = require('../model/incomeModel')

function addIncome(amount) {
    let income = new Income({amount: amount})
    
    income.save()
}

module.exports = addIncome
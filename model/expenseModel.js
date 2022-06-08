const mongoose = require('mongoose')
const schema = require('mongoose').Schema

const expenseSchema = new schema({
    title: String,
    amount: Number
})

const expenseModel = mongoose.model('expense', expenseSchema)

module.exports = expenseModel
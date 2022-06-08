const mongoose = require('mongoose')
const schema = require('mongoose').Schema

const incomeSchema = new schema({
    amount: Number
})

const incomeModel = mongoose.model('income', incomeSchema)

module.exports = incomeModel
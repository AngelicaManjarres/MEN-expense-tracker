const express = require('express')
const router = express.Router();
const connection = require('../model/db')
const addExpense = require('../controller/addExpense')
const addIncome = require('../controller/addIncome')
const Expense = require('../model/expenseModel')
const Income = require('../model/incomeModel')
const detract = require('../controller/detract')
let allExpenses = []
let totalIncome = 0
let totalExpense = 0
let total = 0


//Connect to DB
connection()

//Bring all data and do the pertinent substraction
router.get('/', async (req, res) => {
    await Income.find({})
    .then(allIncome => {
        allIncome.forEach(income => {
            totalIncome += income.amount
        });

    })
    await Expense.find({})
    .then(expenses => {
        allExpenses = expenses
        expenses.forEach(expense => {
            totalExpense += expense.amount
        });
    })
    total = detract(totalIncome, totalExpense)
    res.render('Home', { allExpenses: allExpenses, totalIncome: totalIncome, total: total})
    totalIncome = 0
    totalExpense = 0
    
})

//Add income
router.post('/income', async (req, res) => {
    await addIncome(req.body.amount)
    res.redirect('/')
})

//Add expense
router.get('/addExpense', (req, res) => {
    res.render('AddExpense')
})

router.post('/addExpense', (req, res) => {
    addExpense(req.body.title, req.body.amount)
    res.redirect('/')
})


//Update expense
router.get('/update/:id', (req, res) => {
    Expense.findOne({_id: req.params.id})
    .then(expense => res.render('Update', { expense }))
    .catch(err => console.log(err))
    
})
router.post('/update/:id', (req, res) => {
    Expense.findOneAndUpdate({_id: req.params.id}, {$set:{title: req.body.title, amount: req.body.amount}})
    .then(expense => {
        console.log(`Collection updated: ${expense}`)
        res.redirect('/')
    })
})


//Reset the income
router.get('/reset', async (req, res) => {
    await Income.collection.drop()
    res.redirect('/')
})


//Delete expense
router.get('/delete/:id', (req, res) => {
    Expense.findOneAndRemove({_id: req.params.id}, () => {
        res.redirect('/')
    })
    
})


module.exports = router
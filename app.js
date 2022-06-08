const express = require('express')
const app = express()
const PORT = 5000
const pug = require('pug')
const router = require('./routes/routes')

//Setting up middleware
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'pug')
app.set('views', './views')

//Setting up router
app.use('', router)



app.listen(PORT, () => {
    console.log(`Server up and runnin on port ${PORT}`)
})
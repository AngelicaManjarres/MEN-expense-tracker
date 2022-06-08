const uri = 'mongodb+srv://mainadmin:expense-tracker23@mevn.zgdlwfv.mongodb.net/?retryWrites=true&w=majority'
const mongoose = require('mongoose')

const connection = () => {
    mongoose.connect(uri, {useNewUrlParser: true})
    .then(() => console.log("Connected"))
    .catch(err => console.log(err))
}

module.exports = connection
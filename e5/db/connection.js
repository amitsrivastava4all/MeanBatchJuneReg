const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://ajay:ajay123@cluster0-bbg3p.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/onlineshop');
module.exports = mongoose;
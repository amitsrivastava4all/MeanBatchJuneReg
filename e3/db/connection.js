const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/onlineshop');
module.exports = mongoose;
const route = require('express').Router();
route.get('/buy',(req,res)=>{
    res.send('Inside Order Buy');
});
module.exports = route;
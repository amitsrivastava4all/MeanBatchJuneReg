const express = require('express');
const route = express.Router();
route.get('/buy',(req,res)=>{
    res.send('Inside User Buy');
});
route.get('/register',(req,res)=>{
    res.send('Inside User Register');
});
route.get('/dologin',(req,res)=>{
    var userObject = req.query;
    if(userObject.userid==userObject.pwd){
        res.send('Welcome '+userObject.userid);
    }
    else{
        res.send('Invalid Userid or Password');
    }
    //console.log(req.query);
})
module.exports = route;
 
const express = require('express');
const route = express.Router();
route.get('/buy',(req,res)=>{
    res.send('Inside User Buy');
});
route.get('/register',(req,res)=>{
    res.send('Inside User Register');
});
route.post('/dologin',(req,res)=>{
    var userObject = req.body;
    if(userObject.userid==userObject.pwd){
        res.render('dashboard',{'user':userObject.userid});
      /*console.log('DIR ',__dirname);
        const path = require('path');
        var newPath = path.normalize(__dirname+"/..");
        var fullPath = path.join(newPath,"/public/dashboard.html");
        res.sendFile(fullPath);*/
        //res.send('Welcome '+userObject.userid);
    }
    else{
        res.send('Invalid Userid or Password');
    }
    //console.log(req.query);
})
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
 
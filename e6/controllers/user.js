const express = require('express');
const logger = require("../utils/logger");
const route = express.Router();
route.post('/checkuser',(req,res)=>{
    logger.debug('Inside POST of CHECK USER '+req.body.uid);
    console.log('Body ',req.body);
    var userid = req.body.uid ; 
    console.log('Userid is POST ::: ',userid);
    var existUsers = ["amit","ram"];
    var index =  existUsers.indexOf(userid);
    if(index>=0){
        logger.debug('User is Exist '+req.body.uid);
        res.send('User Exist');
    }
    else{
        logger.debug('User Not Exist '+req.body.uid);
        res.send('User Avaliable');
    }
  })
route.get('/checkuser',(req,res)=>{
  var userid = req.query.uid ; 
  var existUsers = ["amit","ram"];
  var index =  existUsers.indexOf(userid);
  if(index>=0){
      res.send('User Exist');
  }
  else{
      res.send('User Avaliable');
  }
})
route.get('/redirecteg2',(req,res)=>{
    console.log('i am in redirecteg2');
    res.send('Redirect2 Route');
})
route.get('/redirecteg',(req,res)=>{
    console.log('i am in redirecteg');
    res.redirect('/redirecteg2');
})
route.get('/pathparameg/:user/:personal',(req,res)=>{
    var user = req.params.user;
    var personal = req.params.personal;
    res.set({'Content-Type': 'application/json'});
    res.json({'user':user,'personal':personal});
})
route.get('/buy',(req,res)=>{
    res.send('Inside User Buy');
});
route.post('/register',(req,res)=>{
    var userObject = req.body;
    const userOperations = require('../db/helpers/useroperations');
    userOperations.add(userObject, res);
   // res.send('User Added');
    //res.send('Inside User Register');
});
route.post('/dologin',(req,res)=>{
    console.log('Server');
    var userObject = req.body;
    const userOperations = require('../db/helpers/useroperations');
    userOperations.search(userObject, res);


  /*  if(userObject.userid==userObject.pwd){
        let screenArr = [{linkname:'Add User',url:'/add'},{linkname:'Add Product',url:'/product'}]
        res.render('dashboard',{'user':userObject.userid,'links':screenArr});
      /*console.log('DIR ',__dirname);
        const path = require('path');
        var newPath = path.normalize(__dirname+"/..");
        var fullPath = path.join(newPath,"/public/dashboard.html");
        res.sendFile(fullPath);*/
        //res.send('Welcome '+userObject.userid);
    /*}
    else{
        res.send('Invalid Userid or Password');
    }*/
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
 
const express = require('express');
const route = express.Router();
route.post('/checkuser',(req,res)=>{
    console.log('Body ',req.body);
    var userid = req.body.uid ; 
    console.log('Userid is POST ::: ',userid);
    var existUsers = ["amit","ram"];
    var index =  existUsers.indexOf(userid);
    if(index>=0){
        res.send('User Exist');
    }
    else{
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
route.get('/buy',(req,res)=>{
    res.send('Inside User Buy');
});
route.get('/register',(req,res)=>{
    res.send('Inside User Register');
});
route.post('/dologin',(req,res)=>{
    console.log('Server');
    var userObject = req.body;
    if(userObject.userid==userObject.pwd){
        let screenArr = [{linkname:'Add User',url:'/add'},{linkname:'Add Product',url:'/product'}]
        res.render('dashboard',{'user':userObject.userid,'links':screenArr});
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
 
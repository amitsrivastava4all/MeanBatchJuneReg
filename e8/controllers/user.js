const express = require('express');
const logger = require("../utils/logger");
const route = express.Router();
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       let currentPath =  path.normalize(__dirname+"/..");
        //let currentPath = __dirname.normalize('/..');
        console.log('Current Path is ..... ',currentPath);
      cb(null,currentPath+'/uploads/'); // null represent error
    },
    filename: function (req, file, cb) {
        console.log("File ",file);
      cb(null, file.originalname );
    }
  });
 /* upload.single --> it return the function 
  and this function act as a middleware*/
  
  var upload = multer({fileFilter: function (req, file, cb) {
    console.log("File is ",file);
  if (path.extname(file.originalname) !== '.jpeg') {
      
    return cb(new Error('Only JPG are allowed'),false);
  }
else{
  return cb(null,true);
}
}, storage: storage , limits: { fileSize: 1024*1024*2 }}); //2 MB

var uploading = upload.single('imageupload');

route.post('/upload',(req,res)=>{
    uploading(req,res,(err)=>{
        console.log("Inside Uploading..... ");
        if(err){
            console.log("Inside If Condition.... ",err);
            res.send("Error Happens ");
        
        }
        else{
            res.send("File Uploaded Done....");
        }
    })
});
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
    console.log('####### BODY IS ',req.body);
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
 
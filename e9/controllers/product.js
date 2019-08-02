const express = require('express');
const route = express.Router();
const jwt = require('../utils/jwt');
route.get('/addproduct',(req,res)=>{
        let userid = req.query.userid;
        res.json({"msg":"Welcome","userid":userid});
    
 //res.render('addproduct');
});
route.get('/listproduct',(req,res)=>{
    let userid = req.query.userid;
    res.json({"msg":"Welcome List","userid":userid});
    //res.render('listproduct');
});
module.exports = route;
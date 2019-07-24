const jwt = require('../utils/jwt');

const JWTMiddleware = (req,res, next)=>{
    res.set({"Content-Type": "application/json"});
    var token = req.headers['token'];
    console.log("Inside Middleware ",token);
    var userid = jwt.verifyToken(token);
   
    if(userid){
        req.query.userid = userid;
       next();
    }
    else{
        res.json({"msg":"Invalid Token"});
    }
}
module.exports = JWTMiddleware;
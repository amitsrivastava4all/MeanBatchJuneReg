const UserCollection = require('../models/user');
//const bcrypt = require('bcrypt');
var passwordHash = require('password-hash');
const jwt = require("../../utils/jwt");
const saltRounds = 10;
const userOperations = {
    add(userObject, res){
        var hash = passwordHash.generate(userObject.password);
        //var hash = bcrypt.hashSync(userObject.password, saltRounds);
        console.log("Hash is ",hash);
        userObject.password = hash;
        UserCollection.create(userObject,(err)=>{
            if(err){
                res.send('Error During Add');
                console.log('Error During Add ',err);
            }
            else{
                res.send('Record added...');
            }
        })
    },
    search(userObject,res){
        res.set({"Content-Type": "application/json"});
        UserCollection.findOne({'userid':userObject.userid}, (err,doc)=>{
            if(err){
                res.send('Something went Wrong');
                console.log('Error During User Search ',err);
            }
            else if(doc){
                
                let result =passwordHash.verify(userObject.pwd, doc.password);
                //let result = bcrypt.compareSync(userObject.pwd, doc.password);
                if(result){
                var token = jwt.generateToken(userObject.userid);
                let screenArr = [{linkname:'Add Product',url:'/addproduct'},{linkname:'List Product',url:'/listproduct'}];
                
                res.json({"token":token,"user":userObject.userid,"links":screenArr});
                //res.render('dashboard',{'user':userObject.userid,'links':screenArr});
                }
                else{
                    res.json({"message":"Invalid Userid or Password"});
                    //res.send('Invalid Userid or Password');
                }
                //res.send('Welcome '+userObject.userid);
            }
            else{
                res.json({"message":"Invalid Userid or Password"});
               // res.send('Invalid Userid or Password');
            }
        })
    },
    update(){

    },
    delete(){

    }
}
module.exports = userOperations;
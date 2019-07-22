const UserCollection = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userOperations = {
    add(userObject, res){
        var hash = bcrypt.hashSync(userObject.password, saltRounds);
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
        UserCollection.findOne({'userid':userObject.userid}, (err,doc)=>{
            if(err){
                res.send('Something went Wrong');
                console.log('Error During User Search ',err);
            }
            else if(doc){
                console.log()
                let result = bcrypt.compareSync(userObject.pwd, doc.password);
                if(result){
                let screenArr = [{linkname:'Add User',url:'/add'},{linkname:'Add Product',url:'/product'}]
                res.render('dashboard',{'user':userObject.userid,'links':screenArr});
                }
                else{
                    res.send('Invalid Userid or Password');
                }
                //res.send('Welcome '+userObject.userid);
            }
            else{
                res.send('Invalid Userid or Password');
            }
        })
    },
    update(){

    },
    delete(){

    }
}
module.exports = userOperations;
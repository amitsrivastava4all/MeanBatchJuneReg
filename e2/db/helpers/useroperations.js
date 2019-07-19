const UserCollection = require('../models/user');
const userOperations = {
    add(userObject, res){
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
        UserCollection.findOne({'userid':userObject.userid, 'password':userObject.pwd}, (err,doc)=>{
            if(err){
                res.send('Something went Wrong');
                console.log('Error During User Search ',err);
            }
            else if(doc){
                res.send('Welcome '+userObject.userid);
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
const mongoose = require('../connection');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    'userid':{type:String, required:true, unique:true},
    'password':{type:String, required:true},
    'details':{}
});
var UserCollection = mongoose.model('users',UserSchema);
module.exports = UserCollection;
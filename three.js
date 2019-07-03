const fs = require('fs');
var path = '/Users/amit/Documents/nodecodes/basics/three.js';
console.log('Before File Read');
fs.readFile(path,(err,content)=>{
    if(err){
        console.log('Unable to Read a file');
    }
    else{
        console.log(""+content);
    }

});

console.log('After File Read');
for(let i = 1; i<=10; i++){
    console.log('Time Pass Loop ',i);
}
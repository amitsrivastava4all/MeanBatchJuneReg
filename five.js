const fs = require('fs');
console.log("Sync Start");
var content = fs.readFileSync(__filename);
console.log("Content is "+content);
console.log("Sync End");

console.log("Async Call");
fs.readFile(__filename,{encoding:'utf-8'},(err,content)=>{
    if(err){
        console.log("Unable to read a file");
    }
    else{
        console.log(""+content);
    }
})
console.log("Asyc Ends");
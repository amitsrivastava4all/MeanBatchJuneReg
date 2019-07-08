const fs = require('fs');
const path = require('path');
var newPath = path.normalize(__dirname+path.sep+"..");
newPath = path.join(newPath,"/files/test.txt");
console.log('Sep is ',path.sep);
console.log('Del is ',path.delimiter);
var obj  = path.parse(newPath);
console.log("newPath is ",newPath);
console.log("object is ",obj);

console.log('Dir Name is ',path.dirname(newPath));
console.log('File Name is ',path.basename(newPath));
console.log('File Name without extension is ',path.basename(newPath,'.txt'));
fs.readFile(newPath,(err,content)=>{
    console.log('Content is '+content);
})
//fs.readFile(__dirname)
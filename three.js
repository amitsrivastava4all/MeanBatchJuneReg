const fs = require('fs');
function callfn(){

}
try{
callFn();
// Code
}
catch(e){

}

//var path = '/Users/amit/Documents/nodecodes/basics/three.js';
//var path = __dirname+"/three.js";
process.on('exit', (code) => {
    var date = new Date();
    // Email Code
    console.log(`About to exit with code: ${code}`);
  });
console.log(process.cwd());
console.log(process.env);
console.log('Port ',process.env.PORT);
console.log('Before File Read');
fs.readFile(__filename,(err,content)=>{
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
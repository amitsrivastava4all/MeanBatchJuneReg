const fs = require('fs');
const path = '/Users/amit/Documents/spring-final-project/ZuulJWTPart2.mov';
const path2 = '/Users/amit/Documents/spring-final-project/ZuulJWTPart2Copy.mov';
console.log("Read Start");
var err = fs.writeFileSync('abcd.txt','Hello ');
fs.writeFile('abcd.txt',"Hello How are You",(err)=>{
    if(err){
    console.log('Error is ',err);
    }
    else{
        console.log('content write ');
    }
})
var stream = fs.createReadStream(path);
var writeStream = fs.createWriteStream(path2);
stream.pipe(writeStream);
stream.on('open',()=>{

})
stream.on('data',(chunk)=>{
    writeStream.write(chunk);
console.log('Chunk is ',chunk);
});
stream.on('end',()=>{

    console.log("Stream Ended and copy done");
})
stream.on('error',(err)=>{
    
})
stream.on('close',()=>{
    
})
/*fs.readFile(path,(err,content)=>{
if(err){
    console.log("Error is ",err);
}
else{
    console.log(content);
}
})*/
console.log("Read Ends");
for(let i =1; i<=10; i++){
    console.log("mean while Doing some calc");
}

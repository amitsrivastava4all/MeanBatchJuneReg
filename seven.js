const fs= require('fs');
console.log('Watch Start');         
fs.watchFile(__filename,(current, prev)=>{
    console.log("File Change Happens ",current.mtime,prev.mtime);
  });
  
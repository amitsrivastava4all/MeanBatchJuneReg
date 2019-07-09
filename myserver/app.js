const http = require('http');
const fs = require('fs');
const path = require('path');
function handleRequestAndResponse(request,response){
    console.log(request.url);
    console.log(request.method);
    if(request.url=='/index.html'){
            let fullPath = path.join(__dirname,'/public/index.html');
            console.log("Full Path is ",fullPath);

             let readStream = fs.createReadStream(fullPath);
                readStream.pipe(response);
             // readStream.on('data',(chunk)=>{
            //     response.write(chunk);
            // })
            // readStream.on('end',()=>{
            //     response.end();
            // })
    }
    else{
    response.write('Hello Client I am Server');
    response.end();
    }
}
var server = http.createServer(handleRequestAndResponse);
server.listen(1234,()=>{
    console.log('Server Started');
})
const http = require('http');
const fs = require('fs');
const path = require('path');
function serveFile(filePath, response){
    let fullPath = path.join(__dirname,filePath);
    console.log("Full Path is ",fullPath);

     let readStream = fs.createReadStream(fullPath);
        readStream.pipe(response);
}
function isStatic(fileName){
    const extensions = ['.html','.jpg','.png','.js','.css'];
    var ext = path.extname(fileName);
    var index = extensions.indexOf(ext);
    return index>=0;
}
function handleRequestAndResponse(request,response){
    console.log(request.url);
    console.log(request.method);
    if(request.url=='/'){
        serveFile('/public/index.html', response);
       // if we type localhost:1234 serve index.html
    }
    else
    if(isStatic(request.url)){
        serveFile('/public'+request.url, response);
      // if we click on link or image or js or css
    }
    else
    if(request.url=='/dologin' && request.method=='POST'){
        var postData ='';  
        request.on('data',(chunk)=>{
            postData+=chunk;
          })  
          request.on('end',()=>{
              console.log('POST DATA is ',postData);
            response.write('Inside POST');
            const qs = require('querystring');
            var obj = qs.parse(postData);
            console.log('After QS ',obj);
            if(obj.userid == obj.pwd){
                response.write('Welcome '+obj.userid);
            }
            else{
                response.write('Invalid Userid or Password');
            }
            
            response.end();
            })
          
    }
    else
    if(request.url=='/worldcup'){
        var obj = {
            "2019":{"India":[{"IndiaPak":{"result":"India Won","score":300}}]}
        };
        response.writeHead(200 ,{'content-type' :'application/json'} );
        response.write(JSON.stringify(obj));
        response.end();
    }
    else
    if(request.url.includes('/dologin') && request.method=='GET'){
        response.writeHead(200 ,{'content-type' :'text/html'} );
        const url = require('url');
        var obj = url.parse(request.url,true);
        console.log('Object is ',obj.query.userid);
        if(obj.query.userid == obj.query.pwd){
            response.write('Welcome '+obj.query.userid);
        }
        else{
            response.write('Invalid Userid or Password');
        }
        
        response.end();
    }
    else{
        response.write('OOPS U Type Something Wrong...');
        response.end();
        }
   //else
    // if(request.url=='/index.html'){
    //         let fullPath = path.join(__dirname,'/public/index.html');
    //         console.log("Full Path is ",fullPath);

    //          let readStream = fs.createReadStream(fullPath);
    //             readStream.pipe(response);
    //          // readStream.on('data',(chunk)=>{
    //         //     response.write(chunk);
    //         // })
    //         // readStream.on('end',()=>{
    //         //     response.end();
    //         // })
    // }
   
}
var server = http.createServer(handleRequestAndResponse);
server.listen(1234,()=>{
    console.log('Server Started');
})
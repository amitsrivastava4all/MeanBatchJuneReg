const express = require('express');
const app = express();
app.use(express.static('public'));
app.use('/',require('./controllers/user'));
app.use('/order',require('./controllers/order'));
// 
// 404
app.use((req,res,next)=>{
    res.send('U Type Something Invalid No Resource Found');
})
app.listen(process.env.PORT || 1234,()=>{
    console.log('Server Start');
});






//app.use(express.static('public'));
// app.get('/dologin',(req,res)=>{
//     var userObject = req.query;
//     if(userObject.userid==userObject.pwd){
//         res.send('Welcome '+userObject.userid);
//     }
//     else{
//         res.send('Invalid Userid or Password');
//     }
//     //console.log(req.query);
// })

/**
 * 
 */
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.use((req,res,next)=>{
    var date = new Date();
    console.log('Time is ::: ',date, ' req ',req.url);
    next();
});
app.use(require('./utils/cors'));
app.use('/',require('./controllers/user'));
//app.use(require('./utils/jwtmiddleware'));
//app.use('/',require('./controllers/product'));

app.use('/order',require('./controllers/order'));
// 
// 404
app.use((req,res,next)=>{
    res.send('U Type Something Invalid No Resource Found');
})
app.listen(process.env.PORT || 1234,()=>{
    const chalk = require('chalk');
    console.log(chalk.red('Server Start......'));
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

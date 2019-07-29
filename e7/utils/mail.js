const nodemailer = require('nodemailer');

function configMail(name,emailId,message,response){
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: '',
        pass: ''
    }
    });

    // https://myaccount.google.com/lesssecureapps?pli=1

    // setup email data with unicode symbols
    let mailOptions = {
        from: '', // sender address
        to: emailId, // list of receivers
        subject: 'Hello '+name, // Subject line
        text:messsage+name, // plain text body
        html: `<b>${message} </b> ${name}` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Mail NOT Send ERROR.....",error);
            //response.send("Can't Send Mail , Some Error");
            //return console.log(error);
        }
        console.log("Mail Send SuccessFully.....");
       //response.send("Mail Send SuccessFully.....");
    });
});
}
module.exports = configMail;

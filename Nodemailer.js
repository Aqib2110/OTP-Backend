const nodemailer = require('nodemailer');
require('dotenv').config();
var EMAIL_USER = 'muhammadaqib8447@gmail.com'
var EMAIL_PASS = 'bbdicrkimxuxazlj'
function mailsender(email,otp){
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        }
    });
    ////////////////////////////////////////////////////////////////////////////////// process.env.EMAIL_PASS,
    let mailOptions = {
        from:EMAIL_USER,
        // to: 'muhammadaqib29062003@gmail.com',
        to: email,
        subject: 'Email Verification',
        text: `Your otp is ${otp}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent successfully');
    });
}
module.exports = mailsender;


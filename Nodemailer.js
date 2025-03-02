const nodemailer = require('nodemailer');
require('dotenv').config();
function mailsender(email,otp){
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });
    let mailOptions = {
        from:process.env.EMAIL_USER,
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


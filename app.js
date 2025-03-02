const express = require('express');
const mailsender = require('./Nodemailer')
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
var genotp;
const port = 3000;

app.get('/',(req,res)=>{
  console.log(genotp);
  res.send({
    data:genotp
  })
})

app.post('/email',async(req,res)=>{
    const {email} = req.body;
    console.log(req,"aqib");
    console.log(email);
     let otp = parseInt(Math.random() * (999999 - 100000 + 1)) + 100000;
  genotp = otp;
   console.log(otp);
  mailsender(email,otp);
res.send({
  message:"email sent successfuly"
});
})

app.listen(port, async() => {
    console.log(`Server is running on http://localhost:${port}`);  
  
});
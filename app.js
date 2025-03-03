const express = require('express');
const mailsender = require('./Nodemailer')
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
origin:["https://otp-frontend-rust.vercel.app"],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true 
}));
var genotp;
const port = 3000;

app.options('*', (req, res) => {
    res.sendStatus(200); // Always respond with HTTP 200 during preflight
});

app.get('/',(req,res)=>{
  console.log(genotp);
  res.json({
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
 await mailsender(email,otp);
res.json({
  message:"email sent successfuly"
});
})

app.listen(port, async() => {
    console.log(`Server is running on http://localhost:${port}`);  
  
});

const express = require('express');
//require('dotenv').config;
const app = express()
app.use(express.static('public'));

console.log(process.env.MONGOUSERNAME);

app.get('/getData',(req,res)=>{
    //GET DATA FROM MONGODB
    //res.json(data)
    res.setHeader('Content-Type', 'application/json');
    console.log("request received at /getData");
    console.log(process.env.MONGOPASSWORD);
    //res.json("Response received");//sends response to crome
    res.send({
        data:"Response received"
    });
});

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})
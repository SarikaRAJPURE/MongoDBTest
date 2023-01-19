const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const myFruit = require('./models/fruit');
const myVegie = require('./models/vegie');

mongoose.set('strictQuery',false);

const app = express();

app.use(express.json());//that will allow us to accept that javascript object, notation data
//console.log(myFruit);
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

//inside connectionstring define username, password, datbase name clusture.
let connectionstring = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongodbsetup.g4balam.mongodb.net/FoodDatabase?retryWrites=true&w=majority`
console.log(process.env.MONGOUSERNAME);

mongoose.connect(connectionstring, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

//before I can ask and send data into the collection.I need to create a model.
//what this is going to do is actually send the request to make this object in our database.
/* myFruit.create({
    name:"Apple",
    color:"Red",
    age:2,
    readytoeat:true
}); */

app.post('/createFruit', async (req, res) => {
    console.log(req.body);

    const {nameString:name,colorString:color,ageNumber:age,readytoeatBool:readytoeat}= req.body;

    //console.log("running create route");
    console.log("uploading to database...");
    let returnedValue = await myFruit.create({
        name,
        color,
        age,
        readytoeat
    });
    console.log(returnedValue);
    if(returnedValue){
        console.log("Upload Complete");
    }
    res.status(400);
    res.send(returnedValue);
   /* myFruit.create( {
        name:"Apple",
        color:"Red",
        age:2,
        readytoeat:true
    } {
        /* name:req.body.nameString,
        color: req.body.colorString,
        age:req.body.ageNumber,
        readytoeat:req.body.readytoiputBool 
        name,
        color,
        age,
        readytoeat
    });*/
    
    
})

app.post('/createVegie', async (req, res) => {
    console.log(req.body);
    const {nameString:name,colorString:color,ageNumber:age,readytoeatBool:readytoeat}= req.body;
    console.log("uploading to database...");
    let returnedValue = await myVegie.create({
        name,
        color,
        age,
        readytoeat
    });
    console.log(returnedValue);
    if(returnedValue){
        console.log("Upload Complete");
    }
    
    res.send(returnedValue);
    
   
})

app.get('/getData', (req, res) => {
    //GET DATA FROM MONGODB
    //res.json(data)
    res.setHeader('Content-Type', 'application/json');
    console.log("request received at /getData");
    //console.log(process.env.MONGOPASSWORD);
    //res.json("Response received");//sends response to crome
    res.send({ data: "Response received" });
});

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})
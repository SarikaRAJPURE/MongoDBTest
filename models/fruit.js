const mongoose = require('mongoose');

//schemas are kind of like the structure of our data and the data types.

const fruitsSchema = new mongoose.Schema({
    name:String,
    color:String,
    age:Number,
    readytoeat : Boolean
});

// indide model define which collection,and schema
const myFruit = mongoose.model('myFruit',fruitsSchema);

module.exports = myFruit;
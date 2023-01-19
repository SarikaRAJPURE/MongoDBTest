const mongoose = require('mongoose');

//schemas are kind of like the structure of our data and the data types.

const vegiesSchema = new mongoose.Schema({
    name:String,
    color:String,
    age:Number,
    readytoeat : Boolean
});

// indide model define which collection,and schema
const myVegie = mongoose.model('myVegie',vegiesSchema);

module.exports = myVegie;
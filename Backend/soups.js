const mongoose = require("mongoose");

//Define the soups item schema
const SoupsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
});

//Create the soups item model
const SoupsItem = mongoose.model('SoupsItem',SoupsSchema);
module.exports =SoupsItem;
const mongoose = require("mongoose");

//Define the dinner item schema
const DrinksSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
});

//Create the drinks item model
const DrinksItem = mongoose.model('DrinksItem',DrinksSchema);
module.exports = DrinksItem;
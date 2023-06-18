const mongoose = require("mongoose");

//Define the dinner item schema
const DinnerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
});

//Create the dinner item model
const DinnerItem = mongoose.model('DinnerItem',DinnerSchema);
module.exports = DinnerItem;
const mongoose = require("mongoose");

//Define the dinner item schema
const DessertsSchema = new mongoose.Schema({
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
const DessertsItem = mongoose.model('DessertsItem',DessertsSchema);
module.exports = DessertsItem;
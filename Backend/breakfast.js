const mongoose = require ("mongoose");

// Define the breakfast item schema
var BreakfastSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   
    price: {
        type: Number,
        required: true
      }
});

// Create the breakfast item model
const BreakfastItem = mongoose.model('BreakfastItem', BreakfastSchema);

module.exports = BreakfastItem;
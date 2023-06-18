const mongoose = require("mongoose");

// Define the lunch item schema
const LunchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Create the lunch item model
const LunchItem = mongoose.model('LunchItem', LunchSchema);

module.exports = LunchItem;

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes');

const port = 5000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());
// Routes
app.use('/api', router);

// Default route
app.get('/', function(req, res) {
  res.send('Express Working');
});

// Connect to MongoDB
const mongoDBUrl = 'mongodb+srv://Tilan:1234@cluster1.l7etecj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully!');
    // Start the server after successfully connecting to MongoDB
    app.listen(port, function() {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

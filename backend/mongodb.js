const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/imagedb";

mongoose.connect(url)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log('MongoDB connection error:', err));

module.exports = mongoose;

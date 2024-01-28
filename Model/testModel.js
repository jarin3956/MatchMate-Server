const mongoose = require('mongoose');

const testDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const TestData = mongoose.model('TestData', testDataSchema);

module.exports = TestData;
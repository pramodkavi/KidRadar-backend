const mongoose = require('mongoose');

const school = new mongoose.Schema({
  address: {
    type: String,
    required: true
  },
  contactNo: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  division: {
    _index: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  school: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  }
});

const SchoolModel = mongoose.model('schools', school);
module.exports = SchoolModel;

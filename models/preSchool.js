const mongoose = require('mongoose');

const preSchool = new mongoose.Schema({
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
  preSchool: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  }
});

const PreSchoolModel = mongoose.model('preschools', preSchool);

module.exports = PreSchoolModel;

const mongoose = require('mongoose');

// Define schema
const childCasesModel = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
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
  reason: {
    type: String,
    required: true
  },
  caseType: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    _index: {
      type: Number,
      required: true
    }
  },
  division: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    _index: {
      type: Number,
      required: true
    }
  },
  school: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    _index: {
      type: Number,
      required: true
    }
  },
  uid: {
    type: String,
    required: true
  }
});

// Create model
const ChildCasesModel = mongoose.model('childcases', childCasesModel);

module.exports = ChildCasesModel;

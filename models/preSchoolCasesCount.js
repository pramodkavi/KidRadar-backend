const mongoose = require('mongoose');

const childDataSchema = new mongoose.Schema({
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
  graduatesCounts: {
    type: Number,
    required: true
  },
  scholarsCounts: {
    type: Number,
    required: true
  },
  uid: {
    type: String,
    required: true
  }
});

const PreSchoolCasesCount = mongoose.model('preSchoolCasesCount', childDataSchema);

module.exports = PreSchoolCasesCount;

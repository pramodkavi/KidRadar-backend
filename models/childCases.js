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
  institute: {
    label: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    _index: {
      type: Number,
      required: false
    }
  },
  uid: {
    type: String,
    required: true
  },
  location: {
    type: {
      latitude: {
        type: Number,
        required: false
      },
      latitudeDelta: {
        type: Number,
        required: false
      },
      longitude: {
        type: Number,
        required: false
      },
      longitudeDelta: {
        type: Number,
        required: false
      }
    },
    required: false
  }
});

// Create model
const ChildCasesModel = mongoose.model('childcases', childCasesModel);

module.exports = ChildCasesModel;

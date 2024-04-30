const mongoose = require("mongoose");

const institute = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  detailedName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  type: {
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
  subType: {
    type: String,
    required: true,
  },
});

const InstituteModel = mongoose.model("institutes", institute);

module.exports = InstituteModel;

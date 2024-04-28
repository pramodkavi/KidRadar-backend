const mongoose = require('mongoose');

const course = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  instituteId: {
    type: String,
    required: true
  }
});

const CourseModel = mongoose.model('courses', course);

module.exports = CourseModel;

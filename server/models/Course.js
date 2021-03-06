const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CourseSchema = new Schema({
  courseId: Schema.Types.ObjectId,
  courseName: {
    type: String,
    required: true
  },
  courseDescription: {
    type: String
  },
  courseInstructor: {
    type: String
  },
  courseLevel: {
    type: String
  },
  coursePrice: [
    {
      fullPrice: {
        type: String,
        required: true
      },
      discount: {
        type: String
      }
    }
  ],
  courseUpdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = CourseSchema
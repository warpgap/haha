const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ContentSchema = new Schema({
  sectionId: Schema.Types.ObjectId,
  sectionName: {
    type: String
  },
  sectionNumber: {
    type: Number
  },
    lessionList: [
    {
      lessionId: {
        type: Schema.Types.ObjectId
      },
      lessionName: {
        type: String
      },
      lessionNumber: {
        type: Number
      },
      lessionCategory: {
        type: String
      },
      lessionPreview: {
        type: String
      },
      lessionContent: {
        type: String
      },
      lessionUpdate: {
        type: Date,
        default: Date.now
      }
    }
  ],
  sectionUpdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = ContentSchema; 

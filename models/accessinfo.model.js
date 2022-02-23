// accessinfo.model.js - The MongoDB Schema for 'AccessInfo' collection

const mongoose = require("mongoose");

const accessSchema = mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lon: {
    type: Number,
    required: true,
  },
  wheelchair: {
    type: String,
    required: true,
    default: "No",
  },
  wheelchairDesc: {
    type: String,
    required: true,
    default: "No information",
  },
});

module.exports = mongoose.model("AccessInfo", accessSchema);

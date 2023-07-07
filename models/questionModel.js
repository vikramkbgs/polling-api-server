const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  text: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    required: true,
  },
  link_to_vote: {
    type: String,
    required: true,
  },
});

const questionSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  options: [optionSchema],
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;

const mongoose = require("mongoose");

const Student = mongoose.model(
  "student",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      minlength: 3,
      unique:true,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 50,
    },
  })
);

module.exports = Student;

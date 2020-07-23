const express = require("express");
const mongoose = require("mongoose");
const app = express();
const students = require("./routes/Students");
const cors = require("cors");

mongoose.connect("mongodb://localhost/Student", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use("/api/students", students);

app.listen(9999, () => {
  console.log(`connected to port: 9999`);
});

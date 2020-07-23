const Student = require("../Model/Student");
const express = require("express");
const router = express();

router.get("/", async (req, res) => {
  try {
    const result = await Student.find();
    res.send(result);
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/", async (req, res) => {
  try {
    let result = new Student({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    result = await result.save();
    res.send(result);
  } catch (e) {
    console.log(e.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await Student.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    res.send(result);
  } catch (e) {
    console.log(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Student.findByIdAndRemove(req.params.id);
    res.send(result);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;

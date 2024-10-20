const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Student = mongoose.model("Student");

router.get("/", (req, res) => {
  res.render("student/addOrEdit", {
    viewTitile: "Insert Student",
  });
});

router.post("/", async (req, res) => {
  if (req.body._id == "") {
    await insertRecord(req, res);
  } else {
    await updateRecord(req, res);
  }
});

async function insertRecord(req, res) {
  try {
    const student = new Student({
      fullName: req.body.fullName,
      email: req.body.email,
      mobile: req.body.mobile,
      city: req.body.city,
    });
    await student.save(); // Use await for saving the student
    res.redirect("student/list");
  } catch (err) {
    console.error("Error inserting student:", err);
    res.status(500).send("Error inserting student");
  }
}

async function updateRecord(req, res) {
  try {
    await Student.findOneAndUpdate({ _id: req.body._id }, req.body, {
      new: true,
    });
    res.redirect("student/list");
  } catch (err) {
    console.error("Error updating student:", err);
    res.status(500).send("Error updating student");
  }
}

router.get("/list", async (req, res) => {
  try {
    const students = await Student.find();
    res.render("student/list", {
      list: students,
    });
  } catch (err) {
    console.error("Error in retrieval:", err);
    res.status(500).send("Error retrieving student list");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.render("student/addOrEdit", {
      viewTitle: "Update Student",
      student: student,
    });
  } catch (err) {
    console.error("Error retrieving student:", err);
    res.status(500).send("Error retrieving student");
  }
});

router.get("/delete/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).send("Student not found");
    }
    res.redirect("/student/list");
  } catch (err) {
    console.error("Error in deletion:", err);
    res.status(500).send("Error deleting student");
  }
});

module.exports = router;

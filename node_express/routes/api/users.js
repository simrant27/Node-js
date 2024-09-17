const express = require("express");
const router = express.Router(); //router is responsible for handling requests made to /api/users
// const vuid = require("vuid");
//generate unique id

let users = require("../../user");

//get all users
router.get("/", (req, res) => {
  res.json(users);
});

//get users by id
router.get("/");

module.exports = router;

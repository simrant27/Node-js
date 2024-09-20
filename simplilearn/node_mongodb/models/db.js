const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/StudentDB",
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("Connection successful to db");
    } else {
      console.log("Error in connecting db");
    }
  }
);

require("./student.model");

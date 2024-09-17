const express = require("express");
const app = express();

app.use(express.json()); //automatically prse json data and attach to req.body
app.use(express.urlencoded({ extended: false })); //parses incoming URL-encoded data

app.use("/api/users", require("./routes/api/users"));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

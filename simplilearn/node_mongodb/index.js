require("./models/db");
const express = require("express");
const path = require("path");
const handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const bodyparser = require("body-parser");


const studentController = require("./controllers/studentController");

var app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send(
    ` <h2>Welcome to students databse</h2>
    <h3>Click here to access to the <b> <a href = "/student/list">Database</a> </h3>`
  );
});

app.set("views", path.join(__dirname, "/views/"));

app.engine(
  "hbs",
  exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: "hbs",
    defaultLayout: "MainLayout",
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.set("view engine", "hbs");

app.listen(3000, () => {
  console.log("Server startted at port 3000");
});

app.use("/student", studentController);

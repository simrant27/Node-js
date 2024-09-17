const express = require("express");
const mysql = require("mysql");

//create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

//connct to mysql
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("mysql connected");
});

const app = express();

//create database
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Database created");
  });
});

//Create table
app.get("/createemployee", (req, res) => {
  let sql =
    "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255),PRIMARY KEY(id))";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Employee table created");
  });
});

//insert employee
app.get("/employee1", (req, res) => {
  let post = { name: "Simran Tamang", designation: "designer" };
  let sql = "INSERT INTO employee SET ?";
  let query = db.query(sql, post, (err) => {
    if (err) {
      throw err;
    }
    res.send("Employee added");
  });
});

//select employee
app.get("/getemployee", (req, res) => {
  let sql = "SELECT * FROM EMPLOYEE";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send("employee details fetched");
  });
});

//update employee
app.get("/updateemployee/:id", (req, res) => {
  let newUser = "Update name";
  let sql = `UPDATE employee SET name = '${newUser}' WHERE id = ${req.params.id}`;

  let query = db.query(sql, (err) => {
    if (err) {
      throw err;
    }

    res.send("employee updated");
  });
});

//delete employee
app.get("/deleteemployee/:id", (req, res) => {
  let sql = `DELETE FROM employee WHERE id= ${req.params.id}`;
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Deleted successfully");
  });
});

app.listen(3000, (req, res) => {
  console.log("server started on port 3000");
});

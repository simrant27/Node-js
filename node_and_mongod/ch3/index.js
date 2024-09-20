//path module

const path = require("path");

// // return last portion of path
console.log(path.basename("e:/nodejs/node_and_mongod/ch3/index.js"));
// console.log(path.basename(__filename, ".js"));

// console.log(path.dirname("e:/nodejs/node_and_mongod/ch3/index.js"));
// console.log(path.dirname(__filename));

// //extenstion of path
// console.log(path.extname(__filename));

// console.log(path.join("/search", "label", "course/python", "oop"));

// console.log(path.join("/search", "label", "course/python", "oop", "..")); //.. go pack to one directorey
// console.log(path.join(__dirname, "code", "allcode.js"));

// console.log(path.normalize("c\\temp\\\\foo\\bar"));
// console.log(path.win32.normalize("c\\temp\\\\/\\/foo\\bar"));

// console.log(path.parse(__filename));
// console.log(path.parse(__filename).base);

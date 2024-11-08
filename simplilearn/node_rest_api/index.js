const express = require("express");

const app = express();

const port = 3000;

//parse json using express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let movies = [
  {
    id: "1",
    title: "inception",
    director: "CHrist",
    release_date: "2010-07-16",
  },
  {
    id: "2",
    title: "Irishman",
    director: "Martin",
    release_date: "2005-07-16",
  },
];

//get the movide in the form of json
app.get("/movie", (req, res) => {
  res.json(movies);
});

//add movie to arrary
app.post("/movie", (req, res) => {
  const movie = req.body;

  console.log(movie);
  movies.push(movie);
  res.send("Movie is added");
  res.json(movies);
});

//search for movies
app.get("/movie/:id", (req, res) => {
  const id = req.params.id;

  movies.forEach((movie) => {
    if (movie.id === id) {
      res.json(movie);
      return;
    }
  });
  res.status(404).send("Movie not found");
});

//delete
app.delete("/movie/:id", (req, res) => {
  const found = req.params.id;
  movies = movies.filter((movie) => {
    if (movie.id !== found) {
      return true;
    }
    return false;
  });
  res.send("movie delete");
});

//set searver port
app.listen(port, () => console.log(`listening at port no: ${port}`));

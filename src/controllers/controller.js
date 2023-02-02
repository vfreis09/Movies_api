const express = require('express');
const router = express.Router();
const db = require('../config/config')
const Movie = require('../models/model');

//Get movies function
const getMovies = (req, res) => {
  Movie.findAll()
    .then(movies => {
      res.send(movies)
    })
    .catch(err => console.log(err));
}

// Add a movie title
const addMovies = (req, res) => {
  const movie = {
    movieName: req.body.movieName,
    director: req.body.director,
    releaseYear: req.body.releaseYear
  };

  //Insert into table
  Movie.create(movie)
  .then(data => res.redirect('/api/movies'))
  .catch(err => console.log(err));
}

//Update movie by id
const updateMovies = (req, res) => {
  const id = req.params.id;

  Movie.update(req.body, {
    where: { id:id }
  })
  .then(data => res.redirect('/api/movies'))
  .catch(err => console.log(err));
};

//Delete movie by id
const deleteMovies = (req, res) => {
  const id = req.params.id;
  
  Movie.destroy({
    where: { id:id }
  })
  .then(data => res.redirect('/api/movies'))
  .catch(err => console.log(err));
};

module.exports = {
  getMovies,
  addMovies,
  updateMovies,
  deleteMovies
};
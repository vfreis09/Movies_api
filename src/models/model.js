const { Sequelize } = require('sequelize');
const db = require('../config/config');

const Movie = db.define('movie', {
  movieName: {
    type: Sequelize.STRING
  },
  director: {
    type: Sequelize.STRING
  },
  releaseYear: {
    type: Sequelize.INTEGER
  }
});

module.exports = Movie;
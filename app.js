const express = require('express');
const app = express();
const moviesRouter = require('./src/routes/router');
const bodyParser = require('body-parser');
const path = require('path');
const { Sequelize } = require('sequelize');

//Database
const db = require('./src/config/config');

//Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log(`Error: ${err}`));

//Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Redirecting the home page to the correct path
app.get('/', (req, res) => {
  res.redirect('/api/movies');
});

//Movies Router
app.use('/api/movies', moviesRouter)

app.listen(3000);
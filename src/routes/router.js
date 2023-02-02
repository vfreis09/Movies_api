const express = require('express');
const router = express.Router();
const movieController = require('../controllers/controller')

// Get movies list
router.get('/', movieController.getMovies);

//Add movies 
router.post('/add', movieController.addMovies);

//Update movies
router.put('/:id', movieController.updateMovies);

//Delete movies
router.delete('/:id', movieController.deleteMovies);

module.exports = router;
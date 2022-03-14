const express = require('express');
const { getAllMovie, getMovieById } = require('../controllers/movieController');

const router = express.Router();

router.route('/movies').get(getAllMovie);
router.route('/movie/:id').get(getMovieById);



module.exports = router
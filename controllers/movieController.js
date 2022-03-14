const express = require('express');
const movies = require('../data/movieData')



//  get all movies
exports.getAllMovie  = async(req, res, next) => {
    res.status(200).json({
        success: true,
        movies
    })
}


// get movie by id
exports.getMovieById = async(req, res, next) => {
    const movieId  =  req.params.id

    if(!movieId){
        res.status(400).json({
            success: false,
            message: 'Id is not available'
        })
    }

    const movie = movies.movies.filter(item => item.id == movieId)
    res.status(200).json({
        success: true,
        movie : movie
    })  
}
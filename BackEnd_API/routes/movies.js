const express = require('express')
const router = express.Router()
const Movie = require('../models/movies')

// Getting all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting one movie
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// Creating one movie
router.post('/', async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        original_language: req.body.original_language,
        genres: req.body.genres,
        overview: req.body.overview,
        poster_url: req.body.poster_url,
        actors: req.body.actors,
        keywords: req.body.keywords,
        folder_name: req.body.folder_name
    })
    try {
        const newMovie = await movie.save()
        res.status(201).json(newMovie)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating one movie
router.patch('/:id', (req, res) => {

})

// Deleting one movie
router.delete('/:id', (req, res) => {

})

module.exports = router
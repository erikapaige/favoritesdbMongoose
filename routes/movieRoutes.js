const router = require('express').Router()
const { Movie } = require('../models')

// GET all people
router.get('/movie', (req, res) => {
  Movie.find()
    .then(movie => res.json(movie))
    .catch(err => console.error(err))
})

// GET one movie
router.get('/movie/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => console.error(err))
})

// POST one movie
router.post('/movie', (req, res) => {
  Movie.create(req.body)
    .then(movie => res.json(movie))
    .catch(err => console.error(err))
})

// PUT (UPDATE) one movie
router.put('/movie/:id', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one movie
router.delete('/movie/:id', (req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
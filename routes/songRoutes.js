const router = require('express').Router()
const { Song } = require('../models')

// GET all people
router.get('/song', (req, res) => {
  Song.find()
    .then(song => res.json(song))
    .catch(err => console.error(err))
})

// GET one song
router.get('/song/:id', (req, res) => {
  Song.findById(req.params.id)
    .then(song => res.json(song))
    .catch(err => console.error(err))
})

// POST one song
router.post('/song', (req, res) => {
  Song.create(req.body)
    .then(song => res.json(song))
    .catch(err => console.error(err))
})

// PUT (UPDATE) one song
router.put('/song/:id', (req, res) => {
  Song.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one song
router.delete('/song/:id', (req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
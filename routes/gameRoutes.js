const router = require('express').Router()
const { Game } = require('../models')

// GET all people
router.get('/game', (req, res) => {
  Game.find()
    .then(game => res.json(game))
    .catch(err => console.error(err))
})

// GET one game
router.get('/game/:id', (req, res) => {
  Game.findById(req.params.id)
    .then(game => res.json(game))
    .catch(err => console.error(err))
})

// POST one game
router.post('/game', (req, res) => {
  Game.create(req.body)
    .then(game => res.json(game))
    .catch(err => console.error(err))
})

// PUT (UPDATE) one game
router.put('/game/:id', (req, res) => {
  Game.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one game
router.delete('/game/:id', (req, res) => {
  Game.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
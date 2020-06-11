const router = require('express').Router()
const { Food } = require('../models')

// GET all people
router.get('/food', (req, res) => {
  Food.find()
    .then(food => res.json(food))
    .catch(err => console.error(err))
})

// GET one food
router.get('/food/:id', (req, res) => {
  Food.findById(req.params.id)
    .then(food => res.json(food))
    .catch(err => console.error(err))
})

// POST one food
router.post('/food', (req, res) => {
  Food.create(req.body)
    .then(food => res.json(food))
    .catch(err => console.error(err))
})

// PUT (UPDATE) one food
router.put('/food/:id', (req, res) => {
  Food.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one food
router.delete('/food/:id', (req, res) => {
  Food.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
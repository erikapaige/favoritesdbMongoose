const router = require('express').Router()
const { Book } = require('../models')

// GET all people
router.get('/book', (req, res) => {
  Book.find()
    .then(book => res.json(book))
    .catch(err => console.error(err))
})

// GET one book
router.get('/book/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => console.error(err))
})

// POST one book
router.post('/book', (req, res) => {
  Book.create(req.body)
    .then(book => res.json(book))
    .catch(err => console.error(err))
})

// PUT (UPDATE) one book
router.put('/book/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one book
router.delete('/book/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
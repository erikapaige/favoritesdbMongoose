const router = require('express').Router()
// need to bring in both because of post route
const { Movie, User } = require('../models')

// VIEW ALL POSTS THAT EXIST
router.get('/movies', (req, res) => {
  Movie.find()
    .populate('author')
    .then(movies => res.json(movies))
    .catch(err => console.error(err))
})

router.post('/movies', (req, res) => {
  Movie.create(req.body)
    .then(movies => User.findByIdAndUpdate(req.body.author, { $push: { movies: movies._id } }))
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
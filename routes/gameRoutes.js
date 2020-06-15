const router = require('express').Router()
// need to bring in both because of post route
const { Game, User } = require('../models')

// VIEW ALL POSTS THAT EXIST
router.get('/games', (req, res) => {
  Game.find()
    .populate('author')
    .then(games => res.json(games))
    .catch(err => console.error(err))
})

router.post('/games', (req, res) => {
  Game.create(req.body)
    .then(games => User.findByIdAndUpdate(req.body.author, { $push: { games: games._id } }))
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
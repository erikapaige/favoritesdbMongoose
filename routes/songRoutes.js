const router = require('express').Router()
// need to bring in both because of post route
const { Song, User } = require('../models')

// VIEW ALL POSTS THAT EXIST
router.get('/songs', (req, res) => {
  Song.find()
    .populate('author')
    .then(songs => res.json(songs))
    .catch(err => console.error(err))
})

router.post('/songs', (req, res) => {
  Song.create(req.body)
    .then(songs => User.findByIdAndUpdate(req.body.author, { $push: { songs: songs._id } }))
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
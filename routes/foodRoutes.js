const router = require('express').Router()
// need to bring in both because of post route
const { Food, User } = require('../models')

// VIEW ALL POSTS THAT EXIST
router.get('/foods', (req, res) => {
  Food.find()
    .populate('author')
    .then(foods => res.json(foods))
    .catch(err => console.error(err))
})

router.post('/foods', (req, res) => {
  Food.create(req.body)
    .then(foods => User.findByIdAndUpdate(req.body.author, { $push: { foods: foods._id } }))
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
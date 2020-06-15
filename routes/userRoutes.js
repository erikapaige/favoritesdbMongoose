const router = require('express').Router()
const { User } = require('../models')

// rename this as REGISTER ROUTE
router.post('/users/register', (req, res) => {
  const { name, email, username } = req.body
  User.register(new User({ name, email, username }), req.body.password, err => {
    if (err) { console.error(err) }
    res.sendStatus(200)
  })
})

// LOGIN ROUTE (is authenticate method passed to server line 24)
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.error(err) }
    res.json(user)
  })
})

// router.get('/users', (req, res) =>{
//   User.find()
//   .then((users) => res.json(users))
//   .catch(err => console.error(err))
// })
// GET ONE USER (aka login)
// router.get('/users/:id', (req, res) => {
//   User.findById(req.params.id)
//     // specify the field want populated
//     // .populate('posts')
//     // if have more than just 1 item, can add multiple populates to bring in multiple pieces of data looking for
//     .then(user => res.json(user))
//     .catch(err => console.error(err))
// })

// // CREATE one user (aka register)
// router.post('/users', (req, res) =>{
//   User.create(req.body)
//     .then(user => res.json(user))
//     .catch(err => console.error(err))
// })

module.exports = router
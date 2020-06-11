module.exports = require('mongoose').connect('mongodb://localhost/favoritesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
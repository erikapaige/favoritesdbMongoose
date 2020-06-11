const { Schema, model } = require('mongoose')

module.exports = model('Song', new Schema({
  title: String,
  artist: String,
  genre: String
}))

const { Schema, model } = require('mongoose')

module.exports = model('Movie', new Schema({
  title: String,
  length: String,
  genre: String
}))

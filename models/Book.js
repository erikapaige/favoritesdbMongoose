const { Schema, model } = require('mongoose')

module.exports = model('Book', new Schema({
  title: String,
  author: String,
  genre: String
}))

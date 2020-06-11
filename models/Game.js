const { Schema, model } = require('mongoose')

module.exports = model('Game', new Schema({
  title: String,
  type: String,
  family: Boolean
}))

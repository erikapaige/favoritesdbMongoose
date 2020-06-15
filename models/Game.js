const { Schema, model } = require('mongoose')

const Game = new Schema({
  title: String,
  type: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('Game', Game)

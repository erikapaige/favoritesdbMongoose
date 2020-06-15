const { model, Schema } = require('mongoose')

const User = new Schema({
  name: String,
  email: String,
  username: String,
  foods: [{
    type: Schema.Types.ObjectId,
    ref: 'Food'
  }],
  games: [{
    type: Schema.Types.ObjectId,
    ref: 'Game'
  }],
  movies: [{
    type: Schema.Types.ObjectId,
    ref: 'Movie'
  }],
  songs: [{
    type: Schema.Types.ObjectId,
    ref: 'Song'
  }],
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
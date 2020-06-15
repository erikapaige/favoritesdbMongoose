const { Schema, model } = require('mongoose')

const Food = new Schema({
  name: String,
  type: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('Food', Food)
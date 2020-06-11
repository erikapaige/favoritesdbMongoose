const { Schema, model } = require('mongoose')

module.exports = model('Food', new Schema({
  name: String,
  type: String,
  delicious: Boolean
}))

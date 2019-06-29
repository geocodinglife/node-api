const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  subscribersToChannel: {
    type: String,
    require: true
  },

  subscribersDate: {
    type: Date,
    require: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)

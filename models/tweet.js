'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let tweetSchema = new Schema({
  title:  String,
  username: String,
  body:   String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  date: { type: Date, default: Date.now }
});

let Tweet = mongoose.model('Tweet',tweetSchema);

module.exports = Tweet;

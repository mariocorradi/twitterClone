'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let tweetSchema = new Schema({
  title:  String,
  username: String,
  body:   String,
  user:   Schema.Types.ObjectId,
  date: { type: Date, default: Date.now }
});

let Tweet = moongoose.model('Tweet',tweetSchema);

module.exports = Tweet;

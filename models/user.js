const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create a schema
var UserSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: String,
    age: Number,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });

// the schema is useless so far
// we need to create a model using it
const User = mongoose.model('User', UserSchema);

// make this available to our users in our Node applications
module.exports = User;

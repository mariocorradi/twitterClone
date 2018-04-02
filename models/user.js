const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// create a schema
const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  username: String,
  psw: String
  
});

// the schema is useless so far
// we need to create a model using it
const User = mongoose.model('User', UserSchema);

// make this available to our users in our Node applications
module.exports = User;
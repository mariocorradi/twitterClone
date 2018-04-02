const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

//import user schema
const User = require('./models/user.js');

mongoose.connect('mongodb://localhost/test');

//default connection
const db = mongoose.connection;

require('./routes')(app, db);
app.listen(port, () => {
  console.log('We are live on ' + port);
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (){

    const newUser = new User({
        name: 'Irene Cannistraci',
        username: 'Nenermind',
        password: '321password',
        location: 'Rome',
        age: 23
      //  created_at: Date.now,
        //updated_at: Date.now
    });

    newUser.save( err => {
        if (err) console.log("can't save "+err);
        console.log(newUser);
    });
});

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

//import user schema
const User = require('./models/user.js');

//import tweet schema
const Tweet = require('./models/tweet.js');

mongoose.connect('mongodb://localhost/test');

//default connection
const db = mongoose.connection;

require('./routes')(app, db);
app.listen(port, () => {
  console.log('We are live on ' + port);
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (){
    
/* 
    const newTweet = new Tweet({
        title:  'Questo è il mio primo tweet!',
        username: 'Nenermind',
        body:   'Ciao a tutti! Questo è il primo tweet che faccio.',
        user: '5ac8998f642b8506488d38f7'
    });

<<<<<<< Updated upstream
    newTweet.save( err => {
        if (err) console.log("can't save "+err);
        console.log(newTweet);
    });
   
    const newUser = new User({
        name: 'Irene Cannistraci',
        username: 'Nenermind',
        password: '321password',
        location: 'Rome',
        age: 23
    });

    newUser.save( err => {
        if (err) console.log("can't save "+err);
        console.log(newUser);
    });
*/    
=======
    // const newUser = new User({
    //     name: 'Irene Cannistraci',
    //     username: 'Nenermind',
    //     password: '321password',
    //     location: 'Rome',
    //     age: 23
    //   //  created_at: Date.now,
    //     //updated_at: Date.now
    // });
    //
    // newUser.save( err => {
    //     if (err) console.log("can't save "+err);
    //     console.log(newUser);
    // });
    
>>>>>>> Stashed changes
});

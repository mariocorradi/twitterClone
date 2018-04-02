const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

//import user schema
const User = require('./models/user.js');

app.get('/', (req, res) => res.send('Hello Mario and Irene!'));

mongoose.connect('mongodb://localhost/test');

//default connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (){

    const NewUser = new User({
        first_name: 'Irene',
        last_name: 'Cannistraci',
        username: 'Nenermind',
        psw: '321password'
    });
    
    NewUser.save( err => {
        if (err) console.log("WARNING, there is an error!");
        console.log('User saved succesfully!');
    });

    User.find({ name: 'Irene' }, function(err, user) {
        if (err)
            console.log('ERROR!');
        // object of the user
        console.log(user);
    });

});

app.listen(port, () => console.log(`Listening on port ${port}`));
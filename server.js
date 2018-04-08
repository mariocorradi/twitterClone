const express = require('express');
const mongoose = require('mongoose');
//body parser
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

//import user schema
const User = require('./models/user.js');

//import tweet schema
const Tweet = require('./models/tweet.js');

mongoose.connect('mongodb://localhost/test');

//default connection
const db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app,db);
app.listen(port, () => {
  console.log('We are live on ' + port);
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (){

});

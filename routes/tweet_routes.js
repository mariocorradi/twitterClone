//import tweet schema
const Tweet = require('../models/tweet.js');
let ObjectId = require('mongodb').ObjectID;

module.exports = function(app, db) {

    const collection = 
    app.post('/tweet', (req, res) => {
        const newTweet = new Tweet({
          user: req.body.user,
          username: req.body.username,
          title: req.body.title,
          body: req.body.body
        });
        
        newTweet.save(err => {
          if (err) res.send("Can't save " + err);
          res.send(newTweet);
        });
    });

    app.get('/tweet', (req, res) => {
        Tweet.find(function(err, user) {
          if (err)
            console.log('ERROR!');
          // object of the tweet
          console.log('Response GET Tweet '+tweet);
          res.send(tweet);
        });

    });

    app.get('/tweet/:id', (req, res) => {
        const id = req.params.id;
        console.log('Id received '+id)
        const details = {
          '_id': new ObjectId(id)
        };
        db.collection('tweets').findOne(details, (err, item) => {
          if (err) {
            res.send({
              'error': 'An error has occurred'
            });
          } else {
              console.log(JSON.stringify(item));
          }
        });
    });

};

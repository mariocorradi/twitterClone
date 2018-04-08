//import tweet schema
const Tweet = require('../models/tweet.js');
let ObjectId = require('mongodb').ObjectID;

module.exports = function(app, db) {

    const collection =
    app.post('/api/tweet', (req, res) => {
      console.log(req)
      console.log(typeof req.body); //"object"
      const newTweet = new Tweet({
        user: req.body.user,
        username: req.body.username,
        title: req.body.title,
        body: req.body.body
      });

      newTweet.save(err => {
        if (err) {
          res.send("Can't save " + err);
        } else {
          console.log('POST NEW TWEET')
          res.send(newTweet);
        }
      });
    });

    
    app.get('/api/tweet', (req, res) => {
        Tweet.find(function(err, tweet) {
          if (err)
            console.log('ERROR!');
          // object of the tweet
          console.log('Response GET Tweet ');
          res.send(tweet);
        });

    });

    app.get('/api/tweet/:username', (req, res) => {
      const username = req.params.username;
      console.log('Username received '+username)
      const details = {
        'username': username
      };
      Tweet.find(details, (err, item) => {
        if (err) {
          res.send({
            'error': 'An error has occurred'
          });
        } else {
            res.send(item);
        }
      });
    });

    app.get('/api/tweet/:id', (req, res) => {
        const id = req.params.id;
        console.log('Id received '+id)
        const details = {
          '_id': new ObjectId(id)
        };
        Tweet.findOne(details, (err, item) => {
          if (err) {
            res.send({
              'error': 'An error has occurred'
            });
          } else {
              res.send(item);
          }
        });
    });

};

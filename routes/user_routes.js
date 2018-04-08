//import user schema
const User = require('../models/user.js');
let ObjectId = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.post('/api/user', (req, res) => {
    // You'll create your user here.
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      location: req.body.location,
      age: req.body.age
    });

    newUser.save(err => {
      if (err) res.send("can't save " + err);
      res.send(newUser);
    });
  });

  app.get('/api/user', (req, res) => {
    User.find(function(err, user) {
      if (err){
          res.send('ERROR!'+err);
      }
      // object of the user
      console.log("Response GET - user: " + user);
      res.send(user);
    });
  });

  app.get('/api/user/:id', (req, res) => {
    const id = req.params.id;
    console.log('Id received' + id)
    const details = {
      '_id': new ObjectId(id)
    };
    db.collection('users').findOne(details, (err, item) => {
      if (err) {
        res.send({
          'error': 'An error has occurred'
        });
      } else {
        console.log(JSON.stringify(item));
        res.send(item);
      }
    });
  });

};

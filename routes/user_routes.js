//import user schema
const User = require('../models/user.js');

module.exports = function(app, db) {

  app.post('/user', (req, res) => {
    // You'll create your user here.
    console.log('Post')

  });

  app.get('/user', (req, res) => {
    // db.collection('users').find((err, item) => {
    //   if (err) {
    //     console.log('error occurred');
    //   } else {
    //     console.log(item);
    //   }
    // });
    User.find(function(err, user) {
      if (err)
        console.log('ERROR!');
      // object of the user
      console.log(JSON.stringify(user));
    });
  });

  app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const details = {
      '_id': new ObjectID(id)
    };
    db.collection('users').findOne(details, (err, item) => {
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

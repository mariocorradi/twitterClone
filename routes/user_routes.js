//import user schema
const User = require('./models/user.js');

module.exports = function(app, db) {

    app.post('/user', (req, res) => {
      // You'll create your user here.
      res.send('Hello')
    });

    app.get('/user', (req, res) => {
        const id = req.params.id;
        db.collection('users').find((err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(item);
          } 
        });
      });

    app.get('/user/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('users').findOne(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(item);
          } 
        });
      });

};
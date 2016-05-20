var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/zoo';
var randomNumber = require('./random');
var number;

//Routes
//Get animals
router.get('/', function (req, res) {
  pg.connect(connectionString, function (err, client, done){
    if (err) {
      res.sendState(500);
    }

    client.query('SELECT * FROM animals', function (err, result) {
      res.send(result.rows);
      done();
    });
  });
});

//Add an animal
router.post('/', function (req, res) {
  pg.connect(connectionString, function (err, client, done){
    if (err) {
      res.sendState(500);
    }
    number = randomNumber(1, 100);
          client.query("INSERT INTO animals (animal_type, animal_numbers) VALUES ('" + req.body.animal_type + "', '" + number + "')");
    res.send('added');
});
});



module.exports = router;

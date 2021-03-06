var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var rp = require('request-promise');
var db = require('../db');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

// routes

// add an animal to the herd with specific ID
app.post('/animal', (req, res) => {
  console.log('now adding animal...', req.body.animalID);
  db.query(`INSERT INTO animals (animalID) VALUES ('${req.body.animalID}')`)
  res.send('successfully added');
})

// add animal weight (floating point num) and weigh date (a date and time)

app.post('/animal/:id/:weight', (req, res) => {
  console.log('now adding animal weight and weigh date...');
  // select primary id from animals table where animalID === animal ID
  // then add new weight record to weight table

})

// list all animals and weight records
app.get('/animal', (req, res) => {
  console.log('weight list');
  // query for all animals and their most recent weight record
  // db.query(`SELECT a.animalID  `);
})

// return estimated total animal weight at specific date?
app.get('animal/:weighDateAndTime' (req, res) => {
  console.log('estimated weight');
// })



var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

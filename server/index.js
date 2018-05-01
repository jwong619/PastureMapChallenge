var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var rp = require('request-promise');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

// routes

// add an animal to the herd with specific ID
app.post('/animal/:id', (req, res) => {
  console.log('now adding animal...');
})

// add animal weight (floating point num) and weigh date (a date and time)

app.post('/animal/:id/:weight', (req, res) => {
  console.log('now adding animal weight and weigh date...');
})

// list all animals and weight records
app.get('/animal', (req, res) => {
  console.log('here is the list');
})

// return estimated total animal weight
app.get('animal/:weighDateAndTime' (req, res) => {
  console.log('here are all the animals weight at specific time');
})



var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

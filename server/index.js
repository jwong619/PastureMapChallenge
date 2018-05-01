var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var rp = require('request-promise');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());




var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

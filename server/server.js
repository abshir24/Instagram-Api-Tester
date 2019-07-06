// require express and path
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
// create the express app
var app = express();

var request = require('request')

// require bodyParser since we need to handle post data for adding a user
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
// require the mongoose configuration file which does the rest for us
// store the function in a variable
require('./routes.js')(app);

// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
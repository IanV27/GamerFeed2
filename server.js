var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var db = require('./models/index.js');

console.log(db.User);
db.User.findAll().then(users => {
  console.log(users)
});


var PORT = process.env.PORT || 8080;

var app = express();

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var db = require('./models/index.js');
const routes = require("./routes");

var PORT = process.env.PORT || 3001;

var app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


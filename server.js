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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
});


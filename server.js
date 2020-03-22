/* eslint-disable camelcase */
require("dotenv").config();

var passport = require("passport");
var flash = require("connect-flash");
var express = require("express");
var exphbs = require("express-handlebars");
var expfile = require("express-fileupload");
var session = require("express-session");
var cookiePerser = require("cookie-parser");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(expfile({ useTempFiles: true }));
var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_USER,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET
});

var seed = require("./seed");

// Middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: true })
);
app.use(express.static("public"));
app.use(cookiePerser());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app, cloudinary);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
function runSeeds() {
  seed.addUser();
}
function seedTime() {
  setTimeout(runSeeds, 3000);
}
seedTime();

module.exports = app;

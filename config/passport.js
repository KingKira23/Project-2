var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

console.log("you are here");
// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "username"
    },
    function(username, password, done) {
      var dbUser = db.User;
      console.log("it works" + dbUser);
      dbUser.findOne({ where: { username: username } }).then(function(dbUser) {
        console.log("within local strategy", dbUser);
        // If there's no user with the given email
        if (!dbUser) {
          console.log("im here - user");
          return done(null, false, {
            message: "Incorrect username."
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          console.log("im here, password");
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        console.log("made it out alive");
        return done(null, dbUser, {
          message: "Log-in Successful."
        });
      });
    }
  )
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;

var passport = require("passport");
var LocalStratergy = require("passport-local").Strategy;

var db = require("../models");

passport.use(
  new LocalStratergy(function(username, password, done) {
    db.User.findOne({ username: username }, function(err, dbuser) {
      if (err) {
        return done(err);
      }
      if (!dbuser) {
        return done(null, false, { message: "incorrect username." });
      }
      if (!dbuser.validPassword(password)) {
        return done(null, false, { message: "incorrect password." });
      }
      return done(null, dbuser);
    });
  })
  // {
  //   usernameField: "username"
  // },
  // function(username, password, done) {
  //   db.User.findOne({
  //     where: {
  //       name: username
  //     }
  //   }).then(function(dbUser) {
  //     if (!dbUser) {
  //       return done(null, false, {
  //         message: "Incorrect Username."
  //       });
  //     } else if (!dbUser.validPassword(password)) {
  //       return done(null, false, {
  //         message: "Incorrect Password."
  //       });
  //     }
  //     return done(null, dbUser);
  //   });
  // }
);

passport.serializeUser(function(user, cb) {
  cb(null, dbUser);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;

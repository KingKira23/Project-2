const passport = require("passport");
const LocalStratergy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStratergy(
    {
        usernameField: "username"
    },
    (username, password, done) => {
        db.User.findOne ({
            where: {
                name: username
            }
        })
        .then((dbUser) => {
            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect Username."
                });
            }
            else if (!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect Password."
                });
            }
            return done(null, dbUser)
        });
    }
));

passport.serializeUser((user, cb) => {
    cb(null, dbUser)
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj)
});

module.exports = passport;
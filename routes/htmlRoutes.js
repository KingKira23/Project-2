var db = require("../models");

module.exports = function(app) {
  // Load splash page
  app.get("/", function(req, res) {
    res.render("splashPage");
  });

  //load gallery page
  app.get("/gallery", function(req, res) {
    res.render("gallery");
  });

  //load signup page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  //load single image view
  app.get("/gallery/:id", function(req, res) {
    if (req.session.passport) {
      if (req.session.passport.user) {
        res.render("viewArt", {
          artId: req.params.id,
          userId: req.session.passport.user.id
        });
      } else {
        res.render("viewArt", { artId: req.params.id, userId: null });
      }
    } else {
      res.render("viewArt", { artId: req.params.id, userId: null });
    }
  });

  //load user page
  app.get("/user/", function(req, res) {
    if (req.session.passport) {
      if (req.session.passport.user) {
        res.render("user", {
          userId: req.session.passport.user.id
        });
      } else {
        res.render("splashPage");
      }
    } else {
      res.render("splashPage");
    }
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

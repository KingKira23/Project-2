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

  //load gallery page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  //load single image view
  app.get("/gallery/:id", function(req, res) {
    db.Art.findOne({ where: { id: req.params.id } }).then(function(response) {
      res.render("viewArt", {
        art: response
      });
    });
  });

  //load user page
  app.get("/user/:id", function(req, res) {
    res.render("user", {
      userId: req.params.id
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

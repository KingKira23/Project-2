var db = require("../models");

module.exports = function(app) {
  // Load splash page
  app.get("/", function(req, res) {
    res.render("splashPage");
  });

  //load gallery page
  app.get("/gallery", function(req, res) {
    db.Art.findAll({}).then(function(allArt) {
      for (var art in allArt) {
        console.log(allArt[art]);
      }
      res.render("gallery", {
        art: allArt
      });
    });
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
    // db.User.findOne({ where: { id: req.params.id } }).then(function(response) {
    //   res.render("user", {
    //     user: response
    //   });
    // });
    res.render("user", {
      username: req.params.id
    });
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

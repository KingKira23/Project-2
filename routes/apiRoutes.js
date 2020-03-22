var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app, cloudinary) {
  app.post("/login", passport.authenticate("local"), function(req, res) {
    res.redirect("/gallery" + req.user.username);
  });

  app.post("/api/signup", function(req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      name: req.body.name
    })
      .then(function() {
        res.redirect("/gallery");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Get all users
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(artBudDB) {
      res.json(artBudDB);
    });
  });

  // Create a new user
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(artBudDB) {
      res.json(artBudDB);
    });
  });

  // Delete an user by id
  app.delete("/api/user/:user_id", function(req, res) {
    // eslint-disable-next-line camelcase
    db.User.destroy({ where: { user_id: req.params.id } }).then(function(
      artBudDB
    ) {
      res.json(artBudDB);
    });
  });

  // Get all art
  app.get("/api/art", function(req, res) {
    db.Art.findAll({}).then(function(artBudDB) {
      res.json(artBudDB);
    });
  });

  //Get art by user
  app.get("/api/art/:userId", function(req, res) {
    console.log(req.params.userId);
    db.Art.findAll({
      where: { UserId: req.params.userId }
    }).then(function(response) {
      res.json(response);
    });
  });

  // Delete an art by id
  app.delete("/api/art/:art_id", function(req, res) {
    // eslint-disable-next-line camelcase
    db.Art.destroy({ where: { art_id: req.params.id } }).then(function(
      artBudDB
    ) {
      res.json(artBudDB);
    });
  });

  // Get all comments
  app.get("/api/comment/:userId", function(req, res) {
    db.Comment.findAll({
      where: { UserId: req.params.userId }
    }).then(function(artBudDB) {
      res.json(artBudDB);
    });
  });

  // Create a new comment
  app.post("/api/comment", function(req, res) {
    db.Comment.create(req.body).then(function(artBudDB) {
      res.json(artBudDB);
    });
  });

  // Delete a comment by id
  app.delete("/api/comment/:comment_id", function(req, res) {
    // eslint-disable-next-line camelcase
    db.Comment.destroy({ where: { comment_id: req.params.id } }).then(function(
      artBudDB
    ) {
      res.json(artBudDB);
    });
  });

  app.post("/api/uploads", function(req, res) {
    //console.log(req.body.userId);
    cloudinary.uploader.upload(req.files.photo.tempFilePath, function(
      err,
      result
    ) {
      if (err) {
        throw err;
      }
      db.Art.create({
        art_name: req.files.photo.name,
        url_link: result.url,
        UserId: req.body.userId
      })
      res.status(200).end();
    });
  });
};

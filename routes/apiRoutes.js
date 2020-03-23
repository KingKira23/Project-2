var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app, cloudinary) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    //console.log(req.session);
    req.session.userId = req.session.passport.user.dataValues.id;
    res.redirect("/gallery");
    //console.log(req.user.id);
  });

  /*
  app.post(
    "/api/login",
    passport.authenticate("local", {
      successRedirect: "/gallery/",
      failureRedirect: "/",
      failureFlash: true
    })
  );
  */

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

  app.get("/api/gallery/:id", function(req, res) {
    db.Art.findOne({ where: { id: req.params.id } }).then(function(response) {
      console.log(response.dataValues);
      res.json(response.dataValues);
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

  // Get all comments by user
  app.get("/api/comment/user/:userId", function(req, res) {
    db.Comment.findAll({
      where: { UserId: req.params.userId }
    }).then(function(artBudDB) {
      res.json(artBudDB);
    });
  });

  // Get all comments by user
  app.get("/api/comment/art/:artId", function(req, res) {
    db.Comment.findAll({
      where: { artId: req.params.artId }
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
        art_name: req.body.artName,
        url_link: result.url,
        UserId: req.body.userId
      });
      res.status(200).end();
    });
  });
};

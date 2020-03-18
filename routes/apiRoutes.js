var db = require("../models");

module.exports = function(app) {
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
    db.User.destroy({ where: { user_id: req.params.id } }).then(function(artBudDB) {
      res.json(artBudDB);
    });
  });

    // Get all art 
    app.get("/api/art", function(req, res) {
      db.Art.findAll({}).then(function(artBudDB) {
        res.json(artBudDB);
      });
    });
  
    // Create a new art
    app.post("/api/art", function(req, res) {
      db.Art.create(req.body).then(function(artBudDB) {
        res.json(artBudDB);
      });
    });
  
    // Delete an art by id
    app.delete("/api/art/:art_id", function(req, res) {
      db.Art.destroy({ where: { art_id: req.params.id } }).then(function(artBudDB) {
        res.json(artBudDB);
      });
    });

        // Get all comments 
        app.get("/api/comment", function(req, res) {
          db.Comment.findAll({}).then(function(artBudDB) {
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
          db.Comment.destroy({ where: { comment_id: req.params.id } }).then(function(artBudDB) {
            res.json(artBudDB);
          });
        });

};

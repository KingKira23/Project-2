var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  app.post("/login", passport.authenticate("local"),(req, res) => {
    res.redirect("/gallery" + req.user.userName);
  });

  app.post("/api/signup", (req, res) => {
    db.user.create({
      username: req.body.username,
      password: req.body.password,
      name: req.body.name
    })
    .then (() => {
      res.redirect(307, "/login");
    })
    .catch((err) => {
      res.status(401).json(err)
    })
  })

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/")
  })
  
};

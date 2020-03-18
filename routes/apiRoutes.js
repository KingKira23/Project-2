var db = require("../models");

module.exports = function(app, cloudinary) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  //fs to read file and send req.files.image.path
  // Upload route
  // eslint-disable-next-line no-unused-vars
  app.post("/api/uploads", function(req, res) {
    cloudinary.uploader.upload(req.files.photo.tempFilePath, function(
      err,
      result
    ) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  });
};

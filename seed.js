//var app = require("./server");
var db = require("./models");

var seed = {
  addUser: function() {
    db.User.create({
      name: "Albisareswn",
      username: "all",
      password: "boo"
    }).then(this.addArt);
  },

  addArt: function() {
    db.Art.create({
      art_name: "Being There",
      url_link:
        "http://www.clker.com/cliparts/1/4/2/8/11954403871637743121zeimusu_dog_face_4.svg.hi.png",
      UserId: 1
    }).then(this.comment);
  },

  addComment: function() {
    db.Comment.create({
      comment: "Very Nice",
      ArtId: 1,
      UserId: 1
    });
  }
};

module.exports = seed;
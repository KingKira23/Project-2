//var app = require("./server");
var db = require("./models");

var seed = {
  addUser: function() {
    db.User.create({ name: "Shawn", username: "Booboo", password: "boo" });
  },

  addArt: function() {
    db.Art.create({
      art_name: "Being There",
      url_link:
        "http://www.clker.com/cliparts/1/4/2/8/11954403871637743121zeimusu_dog_face_4.svg.hi.png",
      UserId: "1"
    });

    db.Art.create({
      art_name: "Being There",
      url_link:
        "http://www.clker.com/cliparts/1/4/2/8/11954403871637743121zeimusu_dog_face_4.svg.hi.png",
      UserId: "1"
    });

    db.Art.create({
      art_name: "Being There",
      url_link:
        "http://www.clker.com/cliparts/1/4/2/8/11954403871637743121zeimusu_dog_face_4.svg.hi.png",
      UserId: "1"
    });
  },

  addComment1: function() {
    db.Comment.create({
      comment: "This is a great art!",
      UserId: "1",
      ArtId: "1"
    });
  },

  addComment2: function() {
    db.Comment.create({
      comment: "This is also a great art!",
      UserId: "1",
      ArtID: "1"
    });
  }
};
module.exports = seed;

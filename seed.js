<<<<<<< HEAD
/* eslint-disable camelcase */
=======
>>>>>>> 78c30109e087faf5ca299b2a8fbb551afa93e72f
//var app = require("./server");
var db = require("./models");

var seed = {
  addUser: function() {
<<<<<<< HEAD
    db.User.create({ name: "Shawn", username: "Booboo", password: "boo" });
=======
    db.User.create({
      name: "Albisareswn",
      username: "all",
      password: "boo"
    }).then(this.addArt);
>>>>>>> 78c30109e087faf5ca299b2a8fbb551afa93e72f
  },

  addArt: function() {
    db.Art.create({
      art_name: "Being There",
<<<<<<< HEAD
      // eslint-disable-next-line camelcase
      url_link:
        "http://www.clker.com/cliparts/1/4/2/8/11954403871637743121zeimusu_dog_face_4.svg.hi.png",
      UserId: "1"
=======
      url_link:
        "http://www.clker.com/cliparts/1/4/2/8/11954403871637743121zeimusu_dog_face_4.svg.hi.png",
      UserId: 1
>>>>>>> 78c30109e087faf5ca299b2a8fbb551afa93e72f
    });

    db.Art.create({
      art_name: "Being There",
      url_link:
        "http://www.clker.com/cliparts/1/4/2/8/11954403871637743121zeimusu_dog_face_4.svg.hi.png",
<<<<<<< HEAD
      UserId: "1"
=======
      UserId: 1
>>>>>>> 78c30109e087faf5ca299b2a8fbb551afa93e72f
    });

    db.Art.create({
      art_name: "Being There",
      url_link:
        "http://www.clker.com/cliparts/1/4/2/8/11954403871637743121zeimusu_dog_face_4.svg.hi.png",
<<<<<<< HEAD
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
=======
      UserId: 1
>>>>>>> 78c30109e087faf5ca299b2a8fbb551afa93e72f
    });
  }
};

module.exports = seed;

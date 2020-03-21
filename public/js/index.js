$(document).ready(function() {
  //hide scrollbar
  $body = $("body");
  $container = $(".container-fluid");

  $container.css("");

  //handle navbar actions
  // <a class="dropdown-item" href="#" id="userProfile">User Profile</a>
  // <a class="dropdown-item" href="#" id="logout">Logout</a>

  $("#userProfile").on("click", function(event) {
    event.preventDefault();
    console.log("navigate to user!");
    if (userId) {
      $.get("/user/" + userId, function(data) {
        console.log(data);
      });
    } else {
      window.location.assign("/signup");
    }
  });

  const getUserArt = () => {
    $.get("/api/art/" + userId, function(data) {
      const artPieces = data;
      console.log(data);
      buildGallery(artPieces);
    });
  };
});

// var $uploadImg = $("#imgUpload");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   startUpload: function(form) {
//     $.ajax({
//       "async": true,
//       "crossDomain": true,
//       "url": "/api/uploads",
//       "type": "POST",
//       "headers": {
//         "cache-control": "no-cache",
//         "postman-token": "713a4d67-e756-42f9-8214-179c033bad45"
//       },
//       "processData": false,
//       "contentType": false,
//       "mimeType": "multipart/form-data",
//       "data": form
//     })
//       .then(function(res) {
//         console.log(res);
//       })
//       .catch(function(err) {
//         console.log(err);
//       });
//   }
// };

// var handleUpload = function(event) {
//   console.log("Handling upload");
//   var file = event.target.files[0];
//   var formData = new FormData();
//   formData.append("photo", file);
//   API.startUpload(formData);
// };

// // Add event listeners to the submit and delete buttons
// $uploadImg.on("change", handleUpload);

$(document).ready(function() {
  const $body = $("body");
  $body.addClass("userBody");
  const $artContainer = $("#artContainer");
  const $commentContainer = $("#commentContainer");
  var $uploadImg = $("#imgUpload");
  const userId = $("#userRow").data("user");

  const getUserArt = () => {
    $.get("/api/art/" + userId, function(data) {
      const artPieces = data;
      console.log(data);
      buildGallery(artPieces);
    });
  };

  const getUserComments = () => {
    $.get("/api/comments/" + userId, function(data) {
        console.log(data);
    });
  };

  const buildGallery = arts => {
    for (let art of arts) {
      let nextImage = art;
      $artContainer.append(
        `<div class="col-xl-4 col-m-6 col-xs-12 px-0">
            <div class="frame viewImage py-5 px-5 text-center">
                <div class="artBackground">
                    <img class="art img-fluid mx-auto" src="${nextImage.url_link}" alt="${nextImage.art_name}" data-id="${nextImage.id}"></img>
                </div>
            </div>
        </div>`
      );
    }
  };

  const buildComments = comments => {
    for (let comment of comments) {
      let nextComment = comment;
      $commentContainer.append(
        `<div class="col-12 px-4">
           
        </div>`
      );
    }
  };

  getUserArt();
  //getUserComments();

  // The API object contains methods for each kind of request we'll make
  var API = {
    startUpload: function(form) {
      $.ajax({
        async: true,
        crossDomain: true,
        url: "/api/uploads",
        type: "POST",
        headers: {
          "cache-control": "no-cache"
        },
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data",
        data: form
      })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  };

  var handleUpload = function(event) {
    event.preventDefault();
    console.log("Handling upload");
    console.log($uploadImg);
    console.log(event);
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append("photo", file);
    formData.append("userId", userId);
    API.startUpload(formData);
  };

  // Add event listeners to the submit and delete buttons
  $uploadImg.on("change", handleUpload);
  // $("#imageUpload").on("submit", handleUpload);
});

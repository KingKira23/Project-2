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
      buildGallery(artPieces);
    });
  };

  const getUserComments = () => {
    $.get("/api/comment/user/" + userId, function(data) {
      const allComments = data;
      buildComments(allComments);
    });
  };

  const buildGallery = arts => {
    for (let art of arts) {
      let nextImage = art;
      $artContainer.append(
        `<div class="col-xl-4 col-m-6 col-xs-12 px-0">
            <div class="frame viewImage py-5 px-5 text-center" data-id="${nextImage.id}">
                <div class="artBackground">
                    <img class="art img-fluid mx-auto" src="${nextImage.url_link}" alt="${nextImage.art_name}"></img>
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
           <div class="text-center">
           <p>${nextComment.comment}
        </div>`
      );
    }
  };

  getUserArt();
  getUserComments();

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
    const artName = $("#artName").val();
    if (artName === "") {
      //alert user to add a title
      return;
    }

    console.log("Handling upload");
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append("photo", file);
    formData.append("userId", userId);
    formData.append("artName", artName);
    API.startUpload(formData);
  };

  const viewImage = event => {
    event.stopPropagation();
    const id = event.currentTarget.dataset.id;
    window.location.assign("/gallery/" + id);
  };

  $uploadImg.on("change", handleUpload);
  $(document).on("click", ".viewImage", viewImage);
});

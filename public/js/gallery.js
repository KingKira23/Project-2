$(document).ready(function() {
  const $galleryContainer = $("#galleryContainer");

  const getAllArt = () => {
    $.get("/api/art", function(data) {
      const artPieces = data;
      buildGallery(artPieces);
    });
  };

  const buildGallery = art => {
    for (let key of art) {
      let nextImage = key;
      $galleryContainer.append(
        `<div class="col-xl-4 col-m-6 col-xs-12">
            <div class="frame viewImage">
                <img class="img-fluid" src="${nextImage.url_link}" alt="${nextImage.art_name}" data-id="${nextImage.id}" class="art"></img>
            </div>
            </div>`
      );
    }
  };
  getAllArt();

  const viewImage = event => {
    event.stopPropagation();
    const id = $(this).data("id");
    $.ajax({
      method: "GET",
      url: "/api/art/" + id
    }).then(  );
  };
});

//$(document).on("click", "div.viewImage", viewImage);

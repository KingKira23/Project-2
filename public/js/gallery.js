$(document).ready(function() {
  const $galleryContainer = $("#galleryContainer");
  const $body = $("body");
  $body.addClass("galleryBody");

  const getAllArt = () => {
    $.get("/api/art", function(data) {
      const artPieces = data;
      buildGallery(artPieces);
    });
  };

  const buildGallery = arts => {
    for (let art of arts) {
      let nextImage = art;
      $galleryContainer.append(
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
  getAllArt();

  const viewImage = event => {
    event.stopPropagation();
    console.log(event.currentTarget.dataset.id);
    const id = event.currentTarget.dataset.id;
    window.location.assign("/gallery/" + id);
  };

  $(document).on("click", ".viewImage", viewImage);
});

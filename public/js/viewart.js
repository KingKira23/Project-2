$(document).ready(function() {
  const $body = $("body");
  $body.addClass("");
  const $artContainer = $("#artContainer");
  const $commentContainer = $("#commentContainer");
  const artId = $artContainer.data("id");
  //const $commentContainer = $("#commentContainer");

  const getArt = () => {
    $.get("/api/gallery/" + artId, function(data) {
      const art = data;
      console.log(data);
      buildArtView(art);
      getAllComments();
    });
  };

  const getAllComments = () => {
    $.get("/api/comment/art/" + artId, function(data) {
      console.log(data);
      buildCommentView(data);
    });
  };

  const buildArtView = art => {
    $artContainer.append(
      `<div class="col-10 offset-2">
        <div class="frame viewImage py-5 px-5 text-center">
            <div class="artBackground">
            <img class="art img-fluid mx-auto" src="${art.url_link}" alt="${art.art_name}" data-id="${art.id}"></img>
            </div>
        </div>
        </div>`
    );
  };

  const buildCommentView = comments => {
    for (let comment of comments) {
      console.log(comment);
      $commentContainer.append(
        `<div class="col-10 offset-2 mt-5">
                <p> ${comment.comment} - ${comment.UserId} </p>
            </div>`
      );
    }
  };

  getArt();
});

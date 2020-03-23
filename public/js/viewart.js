$(document).ready(function() {
  const $body = $("body");
  $body.addClass("");
  const $artContainer = $("#artContainer");
  const $commentContainer = $("#commentContainer");
  const artId = $artContainer.data("id");
  const userId = $(".main").data("id");
  const $commentBtn = $("#commentSubmit");

  const getArt = () => {
    $.get("/api/gallery/" + artId, function(data) {
      const art = data;
      buildArtView(art);
      getAllComments();
    });
  };

  const getAllComments = () => {
    $.get("/api/comment/art/" + artId, function(data) {
      buildCommentView(data);
    });
  };

  const buildArtView = art => {
    $artContainer.append(
      `<div class="col-12 text-center">
        <div class="frame w-75 py-5 px-5 mx-auto">
            <div class="artBackground">
            <img class="art img-fluid mx-auto" src="${art.url_link}" alt="${art.art_name}" data-id="${art.id}"></img>
            </div>
        </div>
        <div class="text-center mt-1 mb-5">
            <span class="label bg-white my-3 py-1 px-3">${art.art_name}</span>
        </div>
        </div>`
    );
  };

  const buildCommentView = comments => {
    let highlight = true;

    for (let comment of comments) {
      if (highlight) {
        $commentContainer.append(
          `<li class="list-group-item comment-highlight">
                <p> ${comment.comment} - ${comment.UserId} </p>
            </li>`
        );
      } else {
        $commentContainer.append(
          `<li class="list-group-item">
                <p> ${comment.comment} - ${comment.UserId} </p>
            </li>`
        );
      }
      highlight = !highlight;
    }
  };

  getArt();

  $commentBtn.on("click", function(event) {
    event.preventDefault();
    if (userId === ""){
      console.log("nope");
    } else{

      let newComment = {
        comment: $("#message").val(),
        ArtId: artId,
        UserId: userId
      };
      $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "/api/comment",
        data: JSON.stringify(newComment)
      }).then(function(data) {
        window.location.reload();
        // If there's an error, handle it by throwing up a bootstrap alert
      });
    }
  });
});

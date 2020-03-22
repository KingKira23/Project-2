$(document).ready(function() {
  //hide scrollbar
  $body = $("body");
  $container = $(".container-fluid");
  $logoutBtn = $("#logout");

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

  $logoutBtn.on("click", function() {
    $.get("/logout", function() {
      window.location.replace("/gallery");
    });
  });
});

$(document).ready(function() {
  //hide scrollbar
  $body = $("body");
  $container = $(".container-fluid");
  $logoutBtn = $("#logout");

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

  $logoutBtn.on("click", function() {
    $.get("/logout", function() {
      window.location.replace("/gallery");
    });
  });
});

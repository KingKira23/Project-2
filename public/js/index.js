$(document).ready(function() {
  $body = $("body");
  $container = $(".container-fluid");
  $logoutBtn = $("#logout");

  $("#userProfile").on("click", function(event) {
    console.log("navigate to user!");
    window.location.assign("/user");
  });

  $logoutBtn.on("click", function() {
    $.get("/logout", function() {
      window.location.replace("/gallery");
    });
  });
});

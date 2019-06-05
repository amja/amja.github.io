window.onload = function() {
  var tag = window.location.href.split("?")[1];
  if (tag) {
    var posts = document.getElementById("posts");
    var posts_to_hide = document.querySelectorAll("#posts li:not(." + tag + "-tag)");
    posts_to_hide.forEach(function(item) {
      item.style.display = "none";
    });
    console.log(posts_to_hide);
  }
}


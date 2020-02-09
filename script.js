function responsiveTopnav() {
  var x = document.getElementById("topnavbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

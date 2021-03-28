
window.onscroll = function() {stickyHeader()};

// get the Header
var header = document.getElementById("myTopnav");

// get the offset position of the navbar
var sticky = header.offsetTop;

// add the sticky class to the Header
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Patrick C. Kendall 03/29/2021
// eventlistener to autosize a div laid over an existing div
// so that the div is always covering the one below
// cover width is nominally smaller than review width and left position is nominally larger than
// review styling. This should allow for overlapping div to alway be within review: the overlapping div is a blur and
// a similar color to review, while the page background is dark and looks bad if over div if on it.


window.addEventListener('resize', coverResize);

function coverResize(){
  //getting required elements from page: "incomplete" is the content div
  const covers = document.querySelectorAll('.covering');
  const incomplete = document.querySelectorAll('.incomplete');
  const iterations = covers.length;


  let position;
  let height;
  let width;
  let left;


  for(let i=0; i<iterations;i++){
    // getting dynamic styling of review
    position = incomplete[i].offsetTop;
    height = incomplete[i].clientHeight;
    width = incomplete[i].clientWidth*0.99;
    windowWidth = window.innerWidth;
    // this algorithm is found from guess and check; may not be perfect
    // algorithm only works for elements centered horizontally in window width
    left = 100*(1-(width/windowWidth)*1.01)/2;
    left = left.toFixed(4);

    //setting styling of over div
    covers[i].style.top = position + "px";
    covers[i].style.left = left + "%";
    covers[i].style.width = width + "px";
    covers[i].style.height = height + "px";
  }
}

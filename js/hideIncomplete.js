// Patrick C. Kendall 03/29/2021
// first function to create div over elements labeled "incomplete"
// sizes the newdiv according to existing div's proportions
// second function to place labels within the cover explaining why
// content is hidden

function hideIncomplete(){
  // getting elements you want to hide; setting loop counter limit
  const incomplete = document.querySelectorAll('.incomplete');
  const iterations = incomplete.length;

  //initializing variables
  let position;
  let height;
  let width;
  let left;

  for (let i = 0;i < iterations;i++){

    // accessing style information about incomplete review
    height = incomplete[i].clientHeight;
    width = incomplete[i].clientWidth*0.99;
    position = incomplete[i].offsetTop + 70;
    windowWidth = window.innerWidth;
    // this algorithm is found from guess and check; may not be perfect
    left = 100*(1-(width/windowWidth)*1.01)/2;
    left = left.toFixed(4);

    //creating new div with those styles
    let newDiv = document.createElement("div");
    newDiv.style.top = position + 'px';
    newDiv.style.left = left + '%';
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    newDiv.className = "covering";

    // inserting element before null which works for unknown reason
    // const container = document.querySelector('.container');
    // const toc = document.querySelector('.TOC');
    document.body.insertBefore(newDiv, null);
  }
}

function createIncLabels(){
  // initializing label string
  let label = "";

  // selecting coverings
  const covers = document.querySelectorAll('.covering');
  const iterations = covers.length;

  for(let i=0;i<iterations;i++){
    for(let j=0;j<4;j++){
      // creating element to place inside of covering
      let newDiv = document.createElement('div');
      newDiv.className = "incomplete-label";

      // creating text label
      let newLabel = document.createElement('p');
      if( j!== 3){
        label = "Being Edited";
      } else {
        label = "";
      }
      //adding text to p using function from below
      addText(label, newLabel);

      // appending into div and inserting div into DOM
      newDiv.appendChild(newLabel);
      covers[i].insertBefore(newDiv, null);
    }
  }
}

function addText(text, element) {
  var newText = document.createTextNode(text);
  element.appendChild(newText);
}

hideIncomplete();
createIncLabels();

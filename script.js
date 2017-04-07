// Select all HTML elements with a class of "box".
var boxes = document.querySelectorAll(".box");

// For the 1st box (index = 0), change the background color to "blue".
boxes[0].style.backgroundColor = "green";

// 2nd box.
boxes[1].style.backgroundColor = "purple";

// For the 3rd box (index = 2), change the background color to "yellow".
boxes[2].style.backgroundColor = "yellow";

// When anyone clicks on the first box, call the function "boxClicked".
boxes[0].addEventListener("click", boxClicked);


// Variable to hold the current left margin.
var leftMargin = 0;

// Variable used to add to the left margin.
var moveAmount = 5;

// Function that adds moveAmount to leftMargin then appends leftMargin
// to the first box's margin left. Basically moving the box to the right.
function boxClicked() {

    // 'console.log()' only displays in the browser console.
    // It's useful for you, the developer, to debug your code.
    console.log("Hey, box clicked!");
    leftMargin += moveAmount;
    boxes[0].style.marginLeft = leftMargin + "px";
}

console.log(boxes[0]);


// me.
boxes[1].addEventListener("click", boxClicked); 

var leftMargin = 0;
var moveAmount = 10;

function boxClicked() {
    console.log("Hey, 2nd box clicked!");
    leftMargin += moveAmount; 
    boxes[1].style.marginLeft = leftMargin + "px";
}


console.log(boxes[1]);



    // if (leftMargin < 100) {
    //     leftMargin += moveAmount;
    // } else {
    //     leftMargin -= moveAmount;
    // }

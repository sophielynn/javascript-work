// Select all HTML elements with a class of "box".
var boxes = document.querySelectorAll(".box");
var leftMargin = new Array(0,0,0,0,0);

// For the 1st box (index = 0),
boxes[0].style.backgroundColor = "green";
boxes[0].addEventListener('click', function(){
    console.log("Hey, box1 clicked!");
    leftMargin[0] += 5;
    boxes[0].style.marginLeft = leftMargin[0] +"px";
});

// For the 2st box (index = 1),
boxes[1].style.backgroundColor = "purple";
boxes[1].addEventListener('click', function(){
    console.log("Hey, box2 clicked!");
    leftMargin[1] += 10;
    boxes[1].style.marginLeft = leftMargin[1] +"px";
});

// For the 3rd box (index = 2),
boxes[2].style.backgroundColor = "#191919";
boxes[2].addEventListener('click', function(){
    console.log("Hey, box3 clicked!");
    leftMargin[2] += 15;
    boxes[2].style.marginLeft = leftMargin[2] +"px";
});

// For the 4rd box (index = 3),
boxes[3].style.backgroundColor = "blanchedalmond";
boxes[3].addEventListener('dblclick', function(){
    console.log("Hey, box4 double clicked!");
    leftMargin[3] += 20;
    boxes[3].style.marginLeft = leftMargin[3] +"px";
});

// For the 5rd box (index = 4),
boxes[4].addEventListener('click', function(){
    console.log("Hey, box5 clicked!");
    leftMargin[4] += 25;
    boxes[4].style.marginTop = leftMargin[4] +"px";
});


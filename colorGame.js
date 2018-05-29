var colors = generateColors(6)
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.getElementById("msg");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor) {
      msgDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      msgDisplay.textContent = "Try again";
    }
  });
}


function generateColors(num){
  //make an array
  var arr = []
  //add num random colors to array
  for (var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}
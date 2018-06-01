var numSquares = 6;
var colors = generateColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.getElementById("msg");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].classList.add("hidden");
    }
  }
  h1.style.backgroundColor = "steelblue";
  resetBtn.textContent = "New Colors";
  msgDisplay.textContent = "";
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].classList.remove("hidden");
  }
  h1.style.backgroundColor = "steelblue";
  resetBtn.textContent = "New Colors";
  msgDisplay.textContent = "";
});

resetBtn.addEventListener("click", function(){
  //generate all new colors
  colors = generateColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match the picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  resetBtn.textContent = "New Colors";
  msgDisplay.textContent = "";
});

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
      resetBtn.textContent = "Play Again?";
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
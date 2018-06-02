var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.getElementById("msg");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();


function init(){
  setupModeButtons();
  setupSquares();
  reset();
  resetBtn.addEventListener("click", function(){
    reset();
  });
}

function setupModeButtons(){
  for (var i = 0; i < modeBtns.length; i++){
    modeBtns[i].addEventListener("click", function(){
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++){
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
}

function reset(){
  colors = generateColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match the picked color
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  resetBtn.textContent = "New Colors";
  msgDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].classList.remove("hidden");
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].classList.add("hidden");
    }
  }
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
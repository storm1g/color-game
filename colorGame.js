// Global variables
let numSquares = 6;
let colors = [];
let pickedColor;
let tries = 0;

// DOM elements
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const msgDisplay = document.getElementById("msg");
const h1 = document.querySelector("h1");
const resetBtn = document.querySelector("#reset");
const modeBtns = document.querySelectorAll(".mode");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");


init();


function init(){
  setupModeButtons();
  setupSquares();
  reset();
  resetBtn.addEventListener("click", function(){
    reset();
  });
  // overlay.addEventListener("click", toggleOverlay);
}

function setupModeButtons(){
  for (let i = 0; i < modeBtns.length; i++){
    modeBtns[i].addEventListener("click", function(){
      for (let j = 0; j < modeBtns.length; j++){
        modeBtns[j].classList.remove("selected");
      }
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3
        : this.textContent === "Normal" ? numSquares = 6
        : numSquares = 9;
      reset();
    });
  }
}

function setupSquares(){
  for (let i = 0; i < squares.length; i++){
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
        // setTimeout(toggleOverlay, 1000);
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
  for (let i = 0; i < squares.length; i++){
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
  let arr = []
  //add num random colors to array
  for (let i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function changeColors(color) {
  //loop through all squares
  for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

// function toggleOverlay(){
//   if (!overlay.classList[1]){
//     overlay.classList.toggle("open");
//     setTimeout(function(){
//       modal.classList.toggle("open");
//     }, 500);
//   } else {
//     modal.classList.toggle("open");
//     setTimeout(function(){
//       overlay.classList.toggle("open");
//     }, 500);
//   }
// }


"use strict";

let secretnumber = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
let score = 20;
let hig = document.querySelector(".hig");

let start = document.querySelector(".start");
let hit = document.querySelector(".hit");
let guess = document.querySelector(".guess");
let number = document.querySelector(".number");
let question = document.querySelector(".question");

document.querySelector(".check").addEventListener("click", function () {
  let guessvalue = Number(document.querySelector(".add").value);
  hit.textContent = "";

  if (!guessvalue) {
    start.textContent = "📢 Input a number, its blank!!";
  } else if (guessvalue === secretnumber) {
    start.textContent = "🎉 Correct number!";
    question.textContent = secretnumber;
    hit.textContent = "👈 You won, play again?"

    score > highscore ? (highscore = score) : "none";
    hig.textContent = highscore;

    document.querySelector(".container").style.backgroundColor = "#60b347";
    document.querySelector("question").style.width = "100px";
  } else if (score > 0) {
    guessvalue > secretnumber
      ? (start.textContent = "📈 Too high")
      : (start.textContent = "📉 Too low");
    score--;

    number.textContent = score;
  } 
  
  if(score === 0){
  start.textContent = "👎 You lose "
  document.querySelector(".container").style.backgroundColor = "red";

  }

  score === 0 && start.textContent === "👎 You lose "
    ? (hit.textContent = "👈Hit the again button")
    : "none";
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".add").value = "";
  start.textContent = "start guessing...";
  score = 20;
  number.textContent = score;
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  question.textContent = secretnumber;
  hit.textContent = "Now input a number😇";
  question.textContent = '❓';
    document.querySelector(".container").style.backgroundColor = " #000000de";
    

});

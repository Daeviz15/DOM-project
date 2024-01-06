"use strict";

let secretnumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let start = document.querySelector(".start");
let number = document.querySelector(".number");
let question = document.querySelector(".question");
question.textContent = secretnumber;
document.querySelector(".check").addEventListener("click", function () {
  let guessvalue = Number(document.querySelector(".add").value);
  if (guessvalue === "") {
    start.textContent = "📢 Input a number, its blank!!";
  } else if (guessvalue === secretnumber) {
    start.textContent = "🎉 Correct number!";
  } else if (score > 0) {
    if (guessvalue > secretnumber) {
      start.textContent = "📈 Too high";
      score--;
      number.textContent = score;
    } else if (guessvalue < secretnumber) {
      start.textContent = "📉 Too low";
      score--;
      number.textContent = score;
    } else if (score === 0) {
      start.textContent = "👎 You lose";
    }
  } else {
    start.textContent = "📢 Input a number, its blank!!";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".add").value = "";
  start.textContent = "start guessing...";
  score = 20;
  number.textContent = score;
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  question.textContent = secretnumber;
});

"use strict";
const playerscore = document.querySelector(".playscore--0");
const playerscore1 = document.querySelector(".playscore--1");
const content = document.querySelector(".content");
const won = document.querySelector(".won");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const dice = document.querySelector(".dice");
const newgame = document.querySelector(".game");
const score = document.querySelector(".score--0");
const score1 = document.querySelector(".score--1");
let totalscore, currentscore, activeplayer, playing;
const back1 = () => {
  content.style.backgroundImage =
    "linear-gradient(to right,  rgba(250, 217, 223, 0.882) 0%, rgba(253, 220, 225, 0.696) 50%, rgba(250, 248, 248, 0.265) 50%, rgba(250, 248, 248, 0.265) 100%)";
  content.style.transition = "0.5s";
};

const newgameinit = () => {
  totalscore = [0, 0];
  currentscore = 0;
  won.textContent = 'no winner yet'
  activeplayer = 0;
  playing = true;
  roll.style.marginTop = "70px";
  dice.classList.add("hidden");
  playerscore.textContent = 0;
  playerscore1.textContent = 0;
  score.textContent = 0;
  score1.textContent = 0;
  back1();
};

newgameinit();

const switchplayer = () => {
  currentscore = 0;
  document.querySelector(`.score--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
};

const win1 = () => {
  player1.style.color = "#c7365f";
};
const win2 = () => {
  player2.style.color = "#c7365f";
};

const back2 = () => {
  content.style.backgroundImage =
    "linear-gradient(to left,  rgba(250, 217, 223, 0.882) 0%, rgba(253, 220, 225, 0.696) 50%, rgba(250, 248, 248, 0.265) 50%, rgba(250, 248, 248, 0.265) 100%)";
  content.style.transition = "0.5s";
};

roll.addEventListener("click", function () {
  if (playing) {
    dice.classList.remove("hidden");
    roll.style.marginTop = "-27px";
    const diceroll = Math.trunc(Math.random() * 6) + 1;

    dice.src = `dice-${diceroll}.png`;

    /* long way

  if (diceroll !== 1) {
    currentscore += diceroll;
    document.querySelector(`.score--${activeplayer}`).textContent =
      currentscore;
  } else if (diceroll === 1 && activeplayer === 0) {
    currentscore = 0;
    score.textContent = currentscore;
    activeplayer = 1;
 
  }
else{
    activeplayer = 0
    currentscore = 0;
    score.textContent = currentscore;
    score1.textContent = currentscore;

}
*/

    // simplified way

    if (diceroll !== 1) {
      currentscore += diceroll;
      document.querySelector(`.score--${activeplayer}`).textContent =
        currentscore;
    } else {
      switchplayer();
    }

    if (activeplayer === 0) {
      back1();
    } else {
      back2();
    }
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    totalscore[activeplayer] += currentscore;
    document.querySelector(`.playscore--${activeplayer}`).textContent =
      totalscore[activeplayer];

    if (totalscore[activeplayer] >= 10 && activeplayer === 0) {
      playing = false;
won.textContent = `player 1 wins`;
      dice.classList.add("hidden");
    }

  else if (totalscore[activeplayer] >= 10 && activeplayer === 1) {
        playing = false;
  won.textContent = `player 2 wins`;
        dice.classList.add("hidden");
      }
    else {
      switchplayer();
    }

    if (activeplayer === 0) {
      back1();
    } else {
      back2();
    }
  }
});

newgame.addEventListener("click", newgameinit);

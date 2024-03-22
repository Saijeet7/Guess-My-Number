"use strict";

let randomNum = Math.floor(Math.random() * 20);
const button = document.querySelector(".check");
const message = document.querySelector(".message");
const userScore = document.querySelector(".score");
const showResult = document.querySelector(".number");
const body = document.querySelector("body");
const reset = document.querySelector(".again");
let highScore = Number(document.querySelector(".highscore").textContent);
const highScoreWrap = document.querySelector(".highscore");

let score = 20;

const displayMessage = function(newMessage) {
  message.textContent = newMessage;
};

button.addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);
  if (score > 0) {
    if (!guess) {
      displayMessage("Please enter number..");
    } else if (guess === randomNum) {
      displayMessage(`Wow! Guess ${guess} is correct `);
      showResult.textContent = `${guess}`;
      body.style.backgroundColor = "#60b347";
      showResult.style.width = "30rem";
      if (score > highScore) {
        highScore = score;
        highScoreWrap.textContent = `${highScore}`;
        console.log(highScore);
      }
    } else {
      displayMessage(
        randomNum < guess ? `${guess} Too high` : `${guess} Too low`
      );
    }
    userScore.textContent = score;
  } else {
    displayMessage("You Lost The Game");
  }
  score--;
});

reset.addEventListener("click", () => {
  randomNum = Math.floor(Math.random() * 20);
  displayMessage("Start guessing...");
  body.style.backgroundColor = "#222";
  showResult.style.width = "15rem";
  showResult.textContent = "?";
  document.querySelector(".guess").value = "";
  score = 20;
  userScore.textContent = score;
  highScoreWrap.textContent = `${highScore}`;
});

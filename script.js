"use strict";

const randomNum = Math.floor(Math.random() * 20);
const button = document.querySelector(".check");
const message = document.querySelector(".message");
const userScore = document.querySelector(".score");

let score = 20;

button.addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);
  if (score > 0) {
    if (!guess) {
      message.textContent = "Please enter number..";
    } else if (guess > randomNum) {
      message.textContent = `Your number ${guess} is too High`;
    } else if (guess < randomNum) {
      message.textContent = `Your number ${guess} is too Small`;
    } else {
      message.textContent = `Wow! Your Guess ${guess} is correct `;
    }
    userScore.textContent = score;
  } else {
    message.textContent = "You Lost The Game";
  }
  score--;
});

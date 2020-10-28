'use strict';

const elements = {
  userInput: document.querySelector('.guess'),
  check: document.querySelector('.check'),
  hint: document.querySelector('.message'),
  score: document.querySelector('.score'),
  highScore: document.querySelector('.highscore'),
  number: document.querySelector('.number'),
  again: document.querySelector('.again'),
};

let secretNum = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

function evalGuess(e) {
  if (e.keyCode && e.keyCode !== 13) return;

  const userGuess = parseInt(elements.userInput.value);

  if (!userGuess && userGuess !== 0) {
    elements.hint.textContent = '⛔️ No number!';
  } else if (userGuess > secretNum) {
    wrongGuess('high');
  } else if (userGuess < secretNum) {
    wrongGuess('low');
  } else {
    correctGuess();
  }
}

function wrongGuess(numState) {
  if (numState === 'low') {
    score--;
    elements.hint.textContent = '📉 Too low!';
    updateUI(false);
  } else {
    score--;
    elements.hint.textContent = '📈 Too high!';
    updateUI(false);
  }
}

function correctGuess() {
  highScore = score > highScore ? score : highScore;
  elements.userInput;

  updateUI(true);
}

function updateUI(isWin) {
  elements.score.value = score;

  if (isWin) {
    elements.highScore.textContent = score;
    elements.hint.textContent = '🎉 Correct Number!';
    elements.number.textContent = secretNum;
    document.body.classList.add('win');
  }
}

function lost() {
  //
}

function again() {
  //
}

elements.check.addEventListener('click', evalGuess);
elements.userInput.addEventListener('keypress', evalGuess);
elements.again.addEventListener('click', again);

console.log(secretNum);

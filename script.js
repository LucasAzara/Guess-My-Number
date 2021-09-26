'use strict';
// -------------------------------------------------------------------------------------------------------------
function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

let displayNumber = function (number, body, width) {
  document.querySelector('.number').textContent = number;
  document.querySelector('body').style.backgroundColor = body;
  document.querySelector('.number').style.width = width;
};

// Random Number start of site
let secretNumber = randomNumber();

// Score
let score = 20;

// Highscore
let highscore = 0;

// Resets everything except highscore
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);
  displayMessage('Start guessing...');
  displayNumber('?', '#222', '15rem');

  document.querySelector('.guess').value = '';

  secretNumber = randomNumber();
});

// Handling Click Events
// On click run function
document.querySelector('.check').addEventListener('click', function () {
  // function executes getting the value located in the class .guess and converting it using Number() function
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    // is the game is still going
    if (!guess) {
      // No input or 0
      displayMessage('Number has to be between 1 - 20!');
    } else if (guess === secretNumber) {
      //Player wins
      displayMessage('Correct Number!');

      // Change background-color of body in css to green when the player wins the game.
      // Show secret number
      displayNumber(secretNumber, '#60b347', '30rem');

      // Highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      displayScore(--score);
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    }
  } else {
    // if the player lost
    displayMessage('GAME OVER!!!');
    displayScore(0);
    displayNumber(secretNumber, '#E4000F', '30rem');
  }
});

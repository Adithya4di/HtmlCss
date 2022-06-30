'use strict';

let secretNumber = Math.floor(Math.random() * 25 + 1);
console.log(secretNumber);
let score = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function () {
  let userGuess = Number(document.querySelector('.guess').value);
  if (userGuess == 0) {
    alert('input a number before checking');
  } else {
    if (userGuess == secretNumber) {
      document.querySelector('.message').textContent =
        'correct guess..click again to play again';
      document.querySelector('.check').disabled = true;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (userGuess != secretNumber) {
      document.querySelector('.message').textContent = 'wrong guess';
      if (score > 0) {
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        alert('sorry, end of lives, click again to play again');
        document.querySelector('.check').disabled = true;
      }
      if (userGuess < secretNumber) {
        document.querySelector('.message').textContent = 'too low';
      } else {
        document.querySelector('.message').textContent = 'too high';
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 25 + 1);
  score = 20;
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.check').disabled = false;
});

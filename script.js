'use strict';

let score = 20;
let highscore = 0;
document.querySelector('.highscore').textcontent =
  localStorage.getItem('highscore') || 0;

let input = document.querySelector('.guess');

let button = document.querySelector('.check');
let number = document.querySelector('.number');
let message = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = secretNumber;

button.addEventListener('click', () => {
  const value = Number(input.value);
  console.log(value);
  console.log(typeof value);

  if (!value) {
    message.textContent = 'no number';
  } else if (value === secretNumber) {
    console.log(value);
    message.textContent = 'correct number';
    document.body.style.background = '#60b347';
    number.style.background = 'red';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      localStorage.setItem('highscore', highscore);
    }
  } else if (value > secretNumber) {
    if (score > 1) {
      message.textContent = 'trop grand';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'game over';
      document.querySelector('.score').textContent = 0;
    }
  } else if (value < secretNumber) {
    if (score > 1) {
      message.textContent = 'trop petit';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'game over';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'start guessing...';
  document.querySelector('.score').textContent = score;
  input.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15 rem';
  number.textContent = '?';
});

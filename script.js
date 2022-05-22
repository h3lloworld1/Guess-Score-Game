'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When theres no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number! ';         // THESE 2 ARE SAME, I'VE JUST CONVERTED REPEATED ONE TO FUNCTION
    displayMessage('No Number!');

    //  When player wins the game
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '✅ Correct Number!';
    displayMessage('✅ Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High!' : 'Too Low!';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🤡 You lost the game!';
      displayMessage('🤡 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again button - resets
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  Number((document.querySelector('.guess').value = 0));
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
});

//DOM declarations
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const draws = ['rock', 'paper', 'scissors'];

//internal variables
let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;
//console.log(playerScore, computerScore);

//computer draw
function computerDraw() {
  let draw = draws[Math.floor(Math.random() * draws.length)];
  computerSelection = draw;
}
//console.log(computerDraw(), computerSelection, playerSelection);

//comparing draws
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore += 1;
    return 'Paper beats rock. You lose! :(';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore += 1;
    return 'Rock beats scissors. You win! :)';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore += 1;
    return 'Scissors beats paper. You lose! :(';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore += 1;
    return 'Rock beats paper. You win! :)';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore += 1;
    return 'Rock beats scissors. You lose! :(';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore += 1;
    return 'Scissors beats paper. You win! :)';
  } else {
    return 'Draw... Throw again.';
  }
}

//end game
if (playerScore === 5) {
  console.log('You Win!');
}
if (computerScore === 5) {
  console.log('Computer Wins');
}

//Player draw event listeners
rockBtn.addEventListener('click', () => {
  playerSelection = 'rock';
  computerDraw();
  playRound(playerSelection, computerSelection);
});
paperBtn.addEventListener('click', () => {
  playerSelection = 'paper';
  computerDraw();
  playRound(playerSelection, computerSelection);
});
scissorsBtn.addEventListener('click', () => {
  playerSelection = 'scissors';
  computerDraw();
  playRound(playerSelection, computerSelection);
});

// console.log(playRound(playerSelection(), computerSelection()));
// console.log('Computer Score: ' + computerScore);
// console.log('Player Score: ' + playerScore);

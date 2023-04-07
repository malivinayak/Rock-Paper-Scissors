const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const buttons = document.querySelectorAll("button");
const computerMoveEl = document.getElementById("computer-move");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

let score = 0;

function computerPlay() {
  const moves = [ROCK, PAPER, SCISSORS];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (
    (playerSelection === ROCK && computerSelection === SCISSORS) ||
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === SCISSORS && computerSelection === PAPER)
  ) {
    score++;
    return "You win!";
  } else {
    score--;
    return "You lose!";
  }
}

function updateScore() {
  scoreEl.textContent = `Score: ${score}`;
}

function animateResult(result) {
  computerMoveEl.classList.add("animate-fade");
  resultEl.classList.add("animate-fade");
  resultEl.textContent = result;
  updateScore();
  setTimeout(() => {
    computerMoveEl.classList.remove("animate-fade");
    resultEl.classList.remove("animate-fade");
  }, 1000);
}

function handleButtonClick(e) {
  const playerSelection = e.target.id.slice(0, -4);
  const computerSelection = computerPlay();
  computerMoveEl.textContent = `Computer chose ${computerSelection}`;
  computerMoveEl.classList.add("animate");
  setTimeout(() => {
    computerMoveEl.classList.remove("animate");
  }, 1000);
  const result = playRound(playerSelection, computerSelection);
  animateResult(result);
}

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

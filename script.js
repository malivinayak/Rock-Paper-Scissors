const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const buttons = document.querySelectorAll("button");
const computerMoveEl = document.getElementById("computer-move");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const movesTable = document.getElementById("moves-table");

let score = 0;
let round = 0;

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
        return "Computer wins!";
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

function updateMovesTable(result, playerMove, computerMove) {
    round++;
    const newRow = movesTable.insertRow();
    const roundCell = newRow.insertCell(0);
    const playerMoveCell = newRow.insertCell(1);
    const computerMoveCell = newRow.insertCell(2);
    const resultCell = newRow.insertCell(3);
    const scoreCell = newRow.insertCell(4);
    roundCell.textContent = round;
    playerMoveCell.textContent = playerMove;
    computerMoveCell.textContent = computerMove;
    resultCell.textContent = result;
    scoreCell.textContent = score;
    newRow.scrollIntoView({ block: 'end', behavior: 'smooth' });
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
    updateMovesTable(result, playerSelection, computerSelection, score);
}

buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});

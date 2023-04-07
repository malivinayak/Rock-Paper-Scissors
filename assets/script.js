const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const buttons = document.querySelectorAll("button");
const computerMoveEl = document.getElementById("computer-move");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const table = document.getElementById("table-container");
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
        const result = "You win!";
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = result;
        resultDiv.classList.add("glory");
        setTimeout(() => {
            resultDiv.classList.remove("glory");
        }, 1000);
        return result;
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
    computerMoveEl.textContent = `Computer chose: ${computerSelection}`;
    computerMoveEl.classList.add("animate");
    setTimeout(() => {
        computerMoveEl.classList.remove("animate");
    }, 1000);
    const result = playRound(playerSelection, computerSelection);
    animateResult(result);
    updateMovesTable(result, playerSelection, computerSelection, score);
    if (round > 0) {
        table.classList.remove('visibility');
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});

// Dark-Light Mode
$(document).ready(function () {
    $('#dark-mode-toggle input').change(function () {
        $('body').toggleClass('dark-mode');
        $('#game-container').toggleClass('dark-mode');
        $('button').toggleClass('dark-mode');
        $('table').toggleClass('dark-mode');
        $('#computer-move').toggleClass('dark-mode');
        $('#th').toggleClass('dark-mode');
        $('#tr.nth-child').toggleClass('dark-mode');
    });
});

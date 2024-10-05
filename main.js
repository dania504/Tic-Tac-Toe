// variables
const cells = document.querySelectorAll(".cell");
const result = document.querySelector("#result");
const restart = document.querySelector("#restart");
let currPlayer = "X";
let runGame = false;
// array
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let option = ["", "", "", "", "", "", "", "", ""];
// newGame();
startGame();

// all cells empty
function startGame() {
  cells.forEach((cell) => cell.addEventListener("click", Click));
  restart.addEventListener("click", newGame);
  result.textContent = `player ${currPlayer}`;
  runGame = true;
}
// when player click on cell
function Click() {
  const cellIndex = this.getAttribute("cellIndex");
  if (option[cellIndex] != "" || !runGame) {
    return;
  }
  newCell(this, cellIndex);
  //   newPlayer();
  winner();
}
// update cell
function newCell(cell, index) {
  option[index] = currPlayer;
  cell.textContent = currPlayer;
}
// to change the player
function newPlayer() {
  if (currPlayer == "X") {
    currPlayer = "O";
  } else {
    currPlayer = "X";
  }
  result.textContent = `player ${currPlayer}`;
}
// who win
function winner() {
  let winner = false;
  for (let i = 0; i < winCondition.length; i++) {
    const cond = winCondition[i];
    const one = option[cond[0]];
    const two = option[cond[1]];
    const three = option[cond[2]];

    if (one == "" || two == "" || three == "") {
      continue;
    }
    if (one == two && two == three) {
      winner = true;
      break;
    }
  }
  if (winner) {
    result.textContent = `player ${currPlayer} is win !!`;
    runGame = false;
  } else if (!option.includes("")) {
    result.textContent = "Draw!";
  } else {
    newPlayer();
  }
}
// to start new game
function newGame() {
  currPlayer = "X";
  option = ["", "", "", "", "", "", "", "", ""];
  result.textContent = `player ${currPlayer}`;
  cells.forEach((cell) => (cell.textContent = ""));
  runGame = true;
}

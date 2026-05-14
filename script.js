// The Global variables which are the human score and computer score

let humanScore = 0;
let computerScore = 0;

const sect = document.querySelector("#results");
const para = document.createElement("p");
const currentScore = document.createElement("p");
const winner = document.createElement("p");
const computerText = document.createElement("p");

// This function gets the computers choice using Math.random
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);

  if (num == 0) {
    computerText.textContent = "Computer Choice: Rock";
    sect.appendChild(computerText);

    return "rock";
  } else if (num == 1) {
    computerText.textContent = "Computer Choice: Paper";
    sect.appendChild(computerText);

    return "paper";
  } else {
    computerText.textContent = "Computer Choice: Scissors";
    sect.appendChild(computerText);

    return "scissors";
  }
}

//Function for each individual round between the computer and the user.

function playGame(humanChoice) {
  // Logic if user choses rock
  let computerChoice = getComputerChoice();
  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      para.textContent = "It is a tie";
      sect.appendChild(para);
    } else if (computerChoice == "scissors") {
      para.textContent = "You won! Rock beats scissors.";
      sect.appendChild(para);
      humanScore += 1;
    } else {
      para.textContent = "You lost. Paper beats rock.";
      sect.appendChild(para);
      computerScore += 1;
    }
    // Logic if user chooses paper
  } else if (humanChoice == "paper") {
    if (computerChoice == "paper") {
      para.textContent = "It is a tie";
      sect.appendChild(para);
    } else if (computerChoice == "rock") {
      para.textContent = "You won! Paper beats rock.";
      sect.appendChild(para);
      humanScore += 1;
    } else {
      para.textContent = "You lost. Scissors beats paper.";
      sect.appendChild(para);
      computerScore += 1;
    }
    // Logic if user chooses scissors
  } else if (humanChoice == "scissors") {
    if (computerChoice == "scissors") {
      para.textContent = "It is a tie";
      sect.appendChild(para);
    } else if (computerChoice == "paper") {
      para.textContent = "You won! Scissors beats paper.";
      sect.appendChild(para);
      humanScore += 1;
    } else {
      para.textContent = "You lost. Rock beats scissors.";
      sect.appendChild(para);
      computerScore += 1;
    }
  }

  //Prints the ongoing score of the game.
  let scoreText =
    "Player score: " + humanScore + "," + " Computer score: " + computerScore;
  currentScore.textContent = scoreText;
  sect.appendChild(currentScore);

  // When the game determines that the is a winner variables get reset and the outcome is displayed
  if (humanScore == 5) {
    const winningString = `You have won and beat the computer!

    The final score was: ${scoreText}`;
    currentScore.textContent = winningString;
    currentScore.style.whiteSpace = "pre-line";
    sect.appendChild(currentScore);
    sect.removeChild(para);
    sect.removeChild(computerText);

    para.textContent = "";
    ((humanScore = 0), (computerScore = 0));
  } else if (computerScore == 5) {
    const losingString = `You lost. Better luck next time!

    The final score was: ${scoreText}`;
    currentScore.textContent = losingString;
    currentScore.style.whiteSpace = "pre-line";

    sect.appendChild(currentScore);
    sect.removeChild(para);
    sect.removeChild(computerText);

    para.textContent = "";
    ((humanScore = 0), (computerScore = 0));
  }
}

document.querySelector("#rock").addEventListener("click", () => {
  playGame("rock");
});

document.querySelector("#paper").addEventListener("click", () => {
  playGame("paper");
});

document.querySelector("#scissors").addEventListener("click", () => {
  playGame("scissors");
});

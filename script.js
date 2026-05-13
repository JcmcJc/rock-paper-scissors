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
    console.log("Computer chooses rock");
    computerText.textContent = "Computer chooses rock";
    sect.appendChild(computerText);

    return "rock";
  } else if (num == 1) {
    console.log("Computer chooses paper");
    computerText.textContent = "Computer chooses paper";
    sect.appendChild(computerText);

    return "paper";
  } else {
    console.log("Computer chooses scissors");
    computerText.textContent = "Computer chooses scissors";
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
    "Human score: " + humanScore + "," + " Computer score: " + computerScore;
  currentScore.textContent = scoreText;
  sect.appendChild(currentScore);

  // When the game determines that the is a winner variables get reset and the outcome is displayed
  if (humanScore == 5) {
    currentScore.textContent = `You have won and beat the computer!
     The final score was: ${scoreText}`;
    sect.appendChild(currentScore);
    sect.removeChild(para);
    sect.removeChild(computerText);

    para.textContent = "";
    ((humanScore = 0), (computerScore = 0));
  } else if (computerScore == 5) {
    currentScore.textContent = `You lost. Better luck next time!
      The final score was: ${scoreText}`;
    sect.appendChild(currentScore);
    sect.removeChild(para);
    sect.removeChild(computerText);

    para.textContent = "";
    ((humanScore = 0), (computerScore = 0));
  }
}

document.querySelector("#rock").addEventListener("click", () => {
  console.log("YOu pressed rock button");
  playGame("rock");
});

document.querySelector("#paper").addEventListener("click", () => {
  console.log("YOu pressed paper button");
  playGame("paper");
});

document.querySelector("#scissors").addEventListener("click", () => {
  console.log("YOu pressed scissors button");
  playGame("scissors");
});

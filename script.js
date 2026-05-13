// The Global variables which are the human score and computer score

let humanScore = 0;
let computerScore = 0;

const sect = document.querySelector("#results");
const para = document.createElement("p");

// This function gets the computers choice using Math.random
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);

  if (num == 0) {
    console.log("Computer chooses rock");
    return "rock";
  } else if (num == 1) {
    console.log("Computer chooses paper");
    return "paper";
  } else {
    console.log("Computer chooses scissors");
    return "scissors";
  }
}

// The function prompts the user to enter their input
function getHumanChoice() {
  let person = prompt("Please enter rock, paper, or scissors");

  if (person.toLowerCase() == "rock") {
    console.log("You have chosen rock");
  } else if (person.toLowerCase() == "paper") {
    console.log("You have chosen paper");
  } else if (person.toLowerCase() == "scissors") {
    console.log("You have chosen scissors");
  } else {
    console.log("You did not enter a valid choice");
  }
  return person.toLowerCase();
}

//Function for each individual round between the computer and the user.

function playRound(humanChoice) {
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
}

// Function for the 5 rounds of gameplay.
function playGame(buttonChoice) {
  // for (let i = 0; i < 5; i++) {
  let computerChoice = getComputerChoice();
  //let humanChoice = getHumanChoice();
  playRound(buttonChoice, computerChoice);
  console.log(
    "Human score: " + humanScore + "," + " Computer score: " + computerScore,
  );
  // }
}

// Playing the game and determining the winner
// getHumanChoice();
// getComputerChoice();
// playRound();
// console.log(playGame());

document.querySelector("#rock").addEventListener("click", () => {
  console.log("YOu pressed rock button");
  playRound("rock");
});

document.querySelector("#paper").addEventListener("click", () => {
  console.log("YOu pressed paper button");
  playRound("paper");
});

document.querySelector("#scissors").addEventListener("click", () => {
  console.log("YOu pressed scissors button");
  playRound("scissors");
});

// para.textContent = "testing";
// sect.appendChild(para);

if (humanScore > computerScore) {
  console.log("You have won and beat the computer!");
} else if (computerScore > humanScore) {
  console.log("You lost. Better luck next time!");
} else {
  console.log("You guys tied. What a great battle.");
}

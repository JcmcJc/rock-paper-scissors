let humanScore = 0;
let computerScore = 0;
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

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      console.log("It is a tie");
    } else if (computerChoice == "scissors") {
      console.log("You won! Rock beats scissors.");
      humanScore += 1;
    } else {
      console.log("You lost. Paper beats rock.");
      computerScore += 1;
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "paper") {
      console.log("It is a tie");
    } else if (computerChoice == "rock") {
      console.log("You won! Paper beats rock.");
      humanScore += 1;
    } else {
      console.log("You lost. Scissors beats paper.");
      computerScore += 1;
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "scissors") {
      console.log("It is a tie");
    } else if (computerChoice == "paper") {
      console.log("You won! Scissors beats paper.");
      humanScore += 1;
    } else {
      console.log("You lost. Rock beats scissors.");
      computerScore += 1;
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
    console.log(
      "Human score: " + humanScore + "," + " Computer score: " + computerScore,
    );
  }
}

console.log(playGame());

// playRound(humanChoice, computerChoice);

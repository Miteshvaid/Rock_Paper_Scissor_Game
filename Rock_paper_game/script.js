function getRandomChoice() {
  let RandomChoice = Math.round(Math.random() * 3 + 1);
  return RandomChoice;
}

function ComputeChoiceText() {
  let RandomChoice = getRandomChoice();
  let ComputerChoiceText;
  if (RandomChoice === 1) {
    ComputerChoiceText = "Rock ✊";
  } else if (RandomChoice === 2) {
    ComputerChoiceText = "Paper ✋";
  } else {
    ComputerChoiceText = "Scissors ✌️";
  }
  return ComputerChoiceText;
}

function RockClicked() {
  getRandomChoice();
  let ComputerChoiceText = ComputeChoiceText()
  let result;
  if (ComputerChoiceText == "Rock ✊") {
    result = "Tie";
  } else if (ComputerChoiceText == "Paper ✋") {
    result = "Computer wins";
  } else if (ComputerChoiceText == "Scissors ✌️") {
    result = "You win";
  }

  document.querySelector("#result").innerHTML = `
You Choose Rock ✊. <br>
Computer Choose:- ${ComputerChoiceText}. <br>
Result is:- ${result}.`;
}

function PaperClicked() {
  getRandomChoice();
  let ComputerChoiceText = ComputeChoiceText();

  result;
  if (ComputerChoiceText == "Rock ✊") {
    result = "You Win";
  } else if (ComputerChoiceText == "Paper ✋") {
    result = "Tie";
  } else if (ComputerChoiceText == "Scissors ✌️") {
    result = "Computer Wins";
  }

  document.querySelector("#result").innerHTML = `
    You Choose Paper ✋. <br>
    Computer Choose:- ${ComputerChoiceText}. <br>
    Result is:- ${result}.`;
}

function ScissorsClicked() {
  getRandomChoice();
  let ComputerChoiceText = ComputeChoiceText();
  result;
  if (ComputerChoiceText == "Rock ✊") {
    result = "Computer Wins";
  } else if (ComputerChoiceText == "Paper ✋") {
    result = "You win";
  } else if (ComputerChoiceText == "Scissors ✌️") {
    result = "Tie";
  }

  document.querySelector("#result").innerHTML = `
    You Choose Scissors ✌️. <br> 
    Computer Choose:- ${ComputerChoiceText}. <br>
    Result is:- ${result}.`;
}

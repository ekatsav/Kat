function computerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let optionRandom = options[Math.floor(Math.random() * options.length)];
    console.log(optionRandom);
}

function userChoice() {
    let optionUser = prompt("Enter your choice: Rock, Paper, or Scissors?");
    console.log(optionUser);
}

computerChoice();
userChoice();

if (optionRandom == optionUser) {
    let drawAlert = alert(`The computer also chose ${optionRandom}, this is a draw!!`);
}
else if (optionRandom == "Rock" && optionUser == "Scissors") {
    let lossAlert = alert(`The computer chose ${optionRandom}, you lost!`);
}
else if (optionRandom == "Scissors" && optionUser == "Rock") {
    let winAlert = alert(`The computer chose ${optionRandom}, you won!`);
}
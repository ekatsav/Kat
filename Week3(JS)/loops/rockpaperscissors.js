function computerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const optionRandom = options[Math.floor(Math.random() * options.length)];
    console.log(optionRandom);
    return optionRandom;
}

let optionRandom = computerChoice();

function userChoice() {
    let optionUser = prompt("Enter your choice: Rock, Paper, or Scissors?");
    console.log(optionUser);
    return optionUser;
}

let optionUser = userChoice();

if (optionRandom == optionUser) {
    let drawAlert = alert(`The computer also chose ${optionRandom}, this is a draw!!`);
}
else if (optionRandom == "Rock" && optionUser == "Scissors") {
    let lossAlert = alert(`The computer chose ${optionRandom}, you chose ${optionUser}, you lost!`);
}
else if (optionRandom == "Scissors" && optionUser == "Paper") {
    let winAlert = alert(`The computer chose ${optionRandom}, you chose ${optionUser}, you lost!`);
}
else if (optionRandom == "Paper" && optionUser == "Rock") {
    let winAlert = alert(`The computer chose ${optionRandom}, you chose ${optionUser}, you lost!`);
}
else {
    let winAlert = alert(`The computer chose ${optionRandom}, you chose ${optionUser}, you won!`);
}
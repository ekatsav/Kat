let randomNumber = Math.floor(Math.random() * 13) + 1;
console.log(randomNumber);

let numberOfTries = 3;

do {
    let userNumber = prompt("Enter your guess >:D From 1 to 13!!");

    if (randomNumber == userNumber) {
        let winnerAlert = alert(`Wow! Your number (${userNumber}) was correct!!`);
        break;
    }
    else if (randomNumber < userNumber) {
        let higherAlert = alert(`Your number (${userNumber}) is too high`);
    }
    else (randomNumber > userNumber) {
        let lowerAlert = alert(`Your number (${userNumber}) is too low!`);
    }

    numberOfTries--;
}
while (numberOfTries > 0);

if (numberOfTries == 0) {
    let lossAlert = alert(`Sorry! You've lost. The number was ${randomNumber}!`);
}
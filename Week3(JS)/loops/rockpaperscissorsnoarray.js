
let player = prompt("Enter rock (r), paper (p) or scissors (s):");

let computer = 0;

let random = Math.floor(Math.floor() * 3) + 1;

if (random === 1) {
    computer = "r";
}
else if (random === 2) {
    computer = "p";
}
else {
    computer = "s";
}

if (computer === player) {
    drawAlert = alert(`You have drawn, computer chose ${computer}`);
}
else if (player == "r") {
    if (computer == "s") {
        winAlert = alert(`You have won, computer chose ${computer}`);
    }
    else {
        lossAlert = alert(`You have lost, computer chose ${computer}`);
    }
}
else if (player == "p") {
    if (computer == "r") {
        winAlert = alert(`You have won, computer chose ${computer}`);
    }
    else {
        lossAlert = alert(`You have lost, computer chose ${computer}`);
    }
}
else if (player == "s") {
    if (computer == "p") {
        winAlert = alert(`You have won, computer chose ${computer}`);
    }
    else {
        lossAlert = alert(`You have lost, computer chose ${computer}`);
    }
}
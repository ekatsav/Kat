function makeRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

makeRandomNumber();

function makeRandomNumber2(min, max) {
    let randomNumber2 = Math.floor(Math.random() * (max - min +1)) + min;
    console.log(randomNumber2);
}

makeRandomNumber2(3, 23);
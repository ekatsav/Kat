//FOR loop
console.log("Countdown using FOR loop:");

for(let i = 10; i > 0; i--) {
    console.log(i);
}

//WHILE loop - used to loop until a condition has been met
console.log("Countdown using WHILE loop:");

let count = 0;
while(count > 18) {
    console.log(count);
    count--;
}
console.log("lift off!!");

//DO... WHILE loop - a do while loop will ALWAYS run at least once, unlike a while loop. it runs once to check for the condition set
console.log("Countdown using DO-WHILE loop:");

let num = 3;
do {
    console.log(num);
    num--;
}
while( num > 0);
console.log("Lift off!!");

//factors between 1 and 100, greater than 1

const number = prompt("Enter a number: ");

for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}

//higher or lower guessing game
//generate a random number, between 1 and 13
//allow for 3 attempts only
//check if the guess is correct and provide feedback (random number is higher or lower)
//after 3 attempts, reveal the correct answer
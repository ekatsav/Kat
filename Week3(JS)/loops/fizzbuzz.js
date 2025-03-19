//create a function that counts from 1-100
//prints each number to the consoe
//EXCEPT if the number is divisible by 3
//then return "Fizz"
//if divisible by 5, return "Buzz"
//if divisible by both, return "FizzBuzz"

function fizzBuzz(num) {
    for(let i = 1; i <= num; i++) {
         if ((i % 3 == 0) && (i % 5 == 0)) {
            console.log("FizzBuzz");
        }
        else if(i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
         console.log("Buzz");
        }
        else (console.log(i));
     }
}

fizzBuzz(50);

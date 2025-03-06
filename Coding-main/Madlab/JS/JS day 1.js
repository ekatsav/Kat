//This is a comment!

/*This is also a comment!! Like CSS :3*/

var demoVariable = true; //Boolean

console.log(demoVariable);

demoVariable = false;

console.log(demoVariable);

var myName = "Kat"; //String
console.log("My name is " + myName);
myName = "Katya";
console.log("No wait, actually it's " +myName);

var myAge = 25;

console.log("My age is "+ myAge);

myAge = 29;

console.log("My age is "+ myAge);

myAge = myAge +10;

console.log("My age is "+ myAge);

var yourAge = 21;
var totalAge;

totalAge = myAge + yourAge;

console.log(totalAge);

var isOlder;
isOlder = myAge < yourAge;
console.log(isOlder);


var SwitchedOn = false;
if(!SwitchedOn) { /* (!SwitchedOn) = (SwitchedOn == true) */
    console.log("The switch is on!");
}
/*if(SwitchedOn == false) {
    console.log("The switch is off!");
}*/
else {
    console.log("The switch is off!");
}


var hasPetrol = true;
var hasLicense = true;

if(hasPetrol && hasLicense) {
    console.log("Start the carrrrrr");
}
else {
    console.log("No go go");
}

var inputNumber = 9;
var minValue = 3;
var maxValue = 7;

if(inputNumber > minValue && inputNumber < maxValue) {
    console.log("number is within range");
}
else {
    console.log("number is not within range")
}

var thing1 = false;
var thing2 = true;

/*if(thing1 || thing2) {
}
else {
}*/

var inputName = "Sarah";

switch(inputName) {
    case "Kat" :
        console.log("It's meeeee!");
        break;
     case "Dave" :
        console.log("Hi Dave!!");
        break;
    case "Greg" :
    case "Brian" :
    case "Meg" :
    case "Tracy" :
         console.log("Hiiii " + inputName);
        break;

    default:
        console.log("I don't know you.... " + inputName);
        break;
}
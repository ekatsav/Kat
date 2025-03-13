/*let randomNumber = Math.random();
console.log(randomNumber);

randomNumber = randomNumber * 10;
console.log(randomNumber); //don't forget to print stuff again after var changes, silly

randomNumber = Math.floor(randomNumber); //round down, goodbye decimals
console.log(randomNumber);

randomNumber = randomNumber + 1; //+1 allows it to be a range of 1-10 specifically, before it was ranging 0-9
console.log(randomNumber);*/ 

//Now all of that combined instead:

/*let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);*/

let d = new Date();  //current date and time, US format
console.log(d);

//creating variables to store the date/month/year from d
let date = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();

//output message
console.log(`Today is ${date}/${month}/${year}, and I am suffering <3`); //make sure to use ` not ', fml
//````````````````````````
//``````````````` :)

//ask user for DOB

let dobUserInput = prompt("Please enter your DOB in the YYYY/MM/DD format");

let dobDate = new Date(dobUserInput);
console.log(dobDate);

/*let dobYear = prompt("Please enter the year you were born in the format XXXX");
console.log(dobYear);

let dobMonth = prompt("Please enter the month you were born in the format XX");
console.log(dobMonth);

let dobDay = prompt("Please enter the day of the month you were born in the format XX");
console.log(dobDay);*/

/*let dobAlert = alert(`You entered your DOB as ${dobDay}/${dobMonth}/${dobYear}`)
console.log(dobAlert);

//convert the entered data into a date object
let dob = new Date(dobYear, dobMonth - 1, dobDay);
console.log(dob);

//calculate age in years
let ageYears = d.getFullYear() - dob.getFullYear();
console.log(ageYears);*/

//account for months so age by year is accurate (compare current date/month and dob date/month, to see if the bday has passed yet this year). if the date hasn't passed, subtract 1 year from result!

if (d.getMonth() < dob.getMonth() || (d.getMonth() == dob.getMonth() && d.getDate() < dob.getDate())) {
    ageYears--; //= 'ageYears = ageYears - 1'
}

alert(`You are ${ageYears} years old!`);

/*let fullName = "Ekaterina Savenya";
let nameLength = fullName.length;
console.log(`Your name is ${nameLength} characters long!`);

//find & replace JS version wowie

let newName = fullName.replace("Ekaterina", "Jane").replace("Savenya", "Doe");
console.log(`New Name: ${newName}`);

//convert to uppercase

let upperCaseName = fullName.toUpperCase();*/
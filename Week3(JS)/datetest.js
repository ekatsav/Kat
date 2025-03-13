let d = new Date();  //current date and time, US format
console.log(d);

let date = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();

console.log(`Today is ${date}/${month}/${year}, and I am suffering <3`);

let dobUserInput = prompt("Please enter your DOB in the YYYY/MM/DD format");

let dobDate = new Date(dobUserInput);
console.log(dobDate);

let dobAlert = alert(`You entered your DOB as ${dobDate}`)

if (d.getMonth() < dob.getMonth() || (d.getMonth() == dob.getMonth() && d.getDate() < dob.getDate())) {
    ageYears--;
}

alert(`You are ${ageYears} years old!`);
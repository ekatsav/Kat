//Name Entry Section

let fullNameInput = prompt("Please enter your full name in the Firstname Lastname format:")

let nameSplit = fullNameInput.split(" ");
let firstName = nameSplit[0];
let surName = nameSplit[1];
console.log(firstName);
let nameAlert = alert(`You entered your name as ${fullNameInput}`);

let firstNameSplit = firstName.split("");
let firstNameInitial = firstNameSplit[0];
console.log(firstNameInitial);

let surNameSplit = surName.split("");
let surNameInitial = surNameSplit[0];
console.log(surNameInitial);

//DOB entry section

let dobUserInput = prompt("Please enter your DOB in the YYYY/MM/DD format:");

let dobSplit = dobUserInput.split('/');
let dobDay = dobSplit[2];
let dobMonth = dobSplit[1];
let dobYear = dobSplit[0];
console.log(dobDay, dobMonth, dobYear);

let dobDate = new Date(dobUserInput);
let dobAlert = alert(`You entered your DOB as ${dobDate}`);

//NOWWWWW TO THE ACTUAL NAME ASSIGNMENTS

let dragNameComp1;
let dragNameComp2;
let dragNameComp3;

if (dobMonth == "01" || dobMonth == "07") {
    dragNameComp1 = "Miss";
}
else if (dobMonth == "02" || dobMonth == "08") {
    dragNameComp1 = "Mrs";
}
else if (dobMonth == "03" || dobMonth == "09") {
    dragNameComp1 = "Lady";
}
else if (dobMonth == "04" || dobMonth == "10") {
    dragNameComp1 = "Dame";
}
else if (dobMonth == "05" || dobMonth == "11") {
    dragNameComp1 = "Madame";
}
else if (dobMonth == "06" || dobMonth == "12") {
    dragNameComp1 = "";
}

console.log(dragNameComp1);

if (firstNameInitial == "A") {
    dragNameComp2 = "Peaches";
}
else if (firstNameInitial == "B") {
    dragNameComp2 = "Backroll";
}
else if (firstNameInitial == "C") {
    dragNameComp2 = "Orgazma";
}
else if (firstNameInitial == "D") {
    dragNameComp2 = "Sequence";
}
else if (firstNameInitial == "E") {
    dragNameComp2 = "Felicia";
}
else if (firstNameInitial == "F") {
    dragNameComp2 = "Kiki";
}
else if (firstNameInitial == "G") {
    dragNameComp2 = "";
}
else if (firstNameInitial == "H") {
    dragNameComp2 = "Summer";
}
else if (firstNameInitial == "I") {
    dragNameComp2 = "Iona";
}
else if (firstNameInitial == "J") {
    dragNameComp2 = "Ornacia";
}
else if (firstNameInitial == "K") {
    dragNameComp2 = "Ivana";
}
else if (firstNameInitial == "L") {
    dragNameComp2 = "Charity";
}
else if (firstNameInitial == "M") {
    dragNameComp2 = "Ophelia";
}
else if (firstNameInitial == "N") {
    dragNameComp2 = "Toxic";
}
else if (firstNameInitial == "O") {
    dragNameComp2 = "";
}
else if (firstNameInitial == "P") {
    dragNameComp2 = "Ida";
}
else if (firstNameInitial == "Q") {
    dragNameComp2 = "Regina";
}
else if (firstNameInitial == "R") {
    dragNameComp2 = "Alotta";
}
else if (firstNameInitial == "S") {
    dragNameComp2 = "Mimi";
}
else if (firstNameInitial == "T") {
    dragNameComp2 = "Frieda";
}
else if (firstNameInitial == "U") {
    dragNameComp2 = "";
}
else if (firstNameInitial == "V") {
    dragNameComp2 = "Tyra";
}
else if (firstNameInitial == "W") {
    dragNameComp2 = "Bon Qui Qui";
}
else if (firstNameInitial == "X") {
    dragNameComp2 = "Coco";
}
else if (firstNameInitial == "Y") {
    dragNameComp2 = "Amanda";
}
else if (firstNameInitial == "Z") {
    dragNameComp2 = "Zizi";
}

console.log(dragNameComp2);

if (surNameInitial == "A") {
    dragNameComp3 = "Rivers";
}
else if (surNameInitial == "B") {
    dragNameComp3 = "Lake";
}
else if (surNameInitial == "C") {
    dragNameComp3 = "Surprise";
}
else if (surNameInitial == "D") {
    dragNameComp3 = "Eleganza";
}
else if (surNameInitial == "E") {
    dragNameComp3 = "Goodnight";
}
else if (surNameInitial == "F") {
    dragNameComp3 = "Kayne";
}
else if (surNameInitial == "G") {
    dragNameComp3 = "Beaverhousen";
}
else if (surNameInitial == "H") {
    dragNameComp3 = "Balls";
}
else if (surNameInitial == "I") {
    dragNameComp3 = "Summers";
}
else if (surNameInitial == "J") {
    dragNameComp3 = "Vision";
}
else if (surNameInitial == "K") {
    dragNameComp3 = "Heaux";
}
else if (surNameInitial == "L") {
    dragNameComp3 = "Cutabitch";
}
else if (surNameInitial == "M") {
    dragNameComp3 = "Filth";
}
else if (surNameInitial == "N") {
    dragNameComp3 = "Tucker";
}
else if (surNameInitial == "O") {
    dragNameComp3 = "K.Mart";
}
else if (surNameInitial == "P") {
    dragNameComp3 = "Wylde";
}
else if (surNameInitial == "Q") {
    dragNameComp3 = "Latifah";
}
else if (surNameInitial == "R") {
    dragNameComp3 = "O'Plenty";
}
else if (surNameInitial == "S") {
    dragNameComp3 = "Bang Bang";
}
else if (surNameInitial == "T") {
    dragNameComp3 = "Foxxx";
}
else if (surNameInitial == "U") {
    dragNameComp3 = "Caliente";
}
else if (surNameInitial == "V") {
    dragNameComp3 = "Alert";
}
else if (surNameInitial == "W") {
    dragNameComp3 = "D-Lite";
}
else if (surNameInitial == "X") {
    dragNameComp3 = "Bush";
}
else if (surNameInitial == "Y") {
    dragNameComp3 = "Anaconda";
}
else if (surNameInitial == "Z") {
    dragNameComp3 = "Diamond";
}


let dragNameDeclaration = alert(`Your drag name is ${dragNameComp1} ${dragNameComp2} ${dragNameComp3}`);
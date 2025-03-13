function userAge() {
    let currentDate = new Date();
    let dobUserInput = prompt("Please enter your DOB in the YYYY/MM/DD format:");

    let dobDate = new Date(dobUserInput);
    console.log(dobDate);

    let ageYears = currentDate.getFullYear() - dobDate.getFullYear();
    console.log(ageYears);

    if (currentDate.getMonth() < dobDate.getMonth() || (currentDate.getMonth() == dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) {
    ageYears--; //= 'ageYears = ageYears - 1'
    }   

    alert(`You are ${ageYears} years old!`);
}

userAge();
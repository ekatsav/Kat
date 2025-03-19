//define scoring function

function checkAnswers() {
    //set score to 0 to begin with
    let score = 0;
    //define result (assigned language outcome)
    let result = 0;
    //assign the quiz elements to the variable
    let quiz = document.forms.quiz.elements;
    //assign the score to question 1 to the answer1 variable
    let answer1 = quiz.colour.value;
    //assign the score value
    if (answer1 === "pink") {
        score = score + 1;
    }
    else if (answer1 === "yellow") {
        score = score + 2;
    }
    else if (answer1 === "green") {
        score = score + 3;
    }
    else {
        score = score + 4;
    }
    let answer2 = quiz.animal.value;
    if (answer2 === "red-panda") {
        score = score + 1;
    }
    else if (answer2 === "giraffe") {
        score = score + 2;
    }
    else if (answer2 === "jaguar") {
        score = score + 3;
    }
    else {
        score = score + 4;
    }
    let answer3 = quiz.music.value;
    if (answer3 === "pop") {
        score = score + 1;
    }
    else if (answer3 === "hip-hop") {
        score = score + 2;
    }
    else if (answer3 === "rock") {
        score = score + 3;
    }
    else {
        score = score + 4;
    }
    let answer4 = quiz.hobby.value;
    if (answer4 === "read") {
        score = score + 1;
    }
    else if (answer4 === "music") {
        score = score + 2;
    }
    else if (answer4 === "walk") {
        score = score + 3;
    }
    else {
        score = score + 4;
    }

//determine result from score

if (score < 6) {
    result = "HTML";
}
else if (score < 10) {
    result = "Python";
}
else if (score < 13) {
    result = "JavaScript"
}
else {
    result = "Java";
}

//display the result as an alert

resultAlert = alert(`The programming language you should learn is ${result}. Have fun!`);
}
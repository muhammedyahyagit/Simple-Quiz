var questions = [
    "Q1. What is the capital of France?",
    "Q2. What is the largest planet in our solar system?",
    "Q3.What is the longest river in the world?",
    "Q4. What is the hardest natural substance on Earth?",
    "Q5. How many bones are there in the adult human body??"
];

var answers = [
    "Paris",
    "Jupiter",
    "Nile River",
    "Diamond",
    "206"
];

var correctCount = 0;
var wrongCount = 0;

for (var i = 0; i < questions.length; i++) {
    var userAnswer = prompt(questions[i]); 

    if (userAnswer === answers[i]) {
        correctCount++;
    } else {
        wrongCount++; 
    }
}

var score = (correctCount / questions.length) * 100;

var grade;
if (score === 100) {
    grade = "A+";
} else if (score >= 80) {
    grade = "A";
} else if (score >= 60) {
    grade = "B";
} else if (score >= 40) {
    grade = "C";
} else {
    grade = "F";
}

alert(`Total Score: ${score}%\nCorrect Answers: ${correctCount}\nWrong Answers: ${wrongCount}\nGrade: ${grade}`);

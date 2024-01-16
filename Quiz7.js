import { questions as ques } from "./questionsModule.js";

const myButton = document.getElementById('mybutton');

myButton.addEventListener('click',func);



function func(){const correctAnswers = {
    question1: "string",
    question2: "float",
    question3: "twenty-two",
    question4: "zero"
};

const questions = ques;

const userAnswers = {};

for (let i = 0; i < questions.length; i++) {
    const answer = prompt(questions[i]);
    if (answer && answer.toLowerCase() === 'quit') {
        console.log('Quiz terminated. Goodbye!');
        break;
    }
    userAnswers[`question${i + 1}`] = answer;
}

if (Object.keys(userAnswers).length > 0) {
    let total =0;
    for (const question in userAnswers) {
        const isCorrect = userAnswers[question].toLowerCase() === correctAnswers[question].toLowerCase();

        console.log(`${question} - Your answer: ${userAnswers[question]}, Correct answer: ${correctAnswers[question]}`);
        console.log(`Result: ${isCorrect ? 'Correct' : 'Wrong'}`);
        if(isCorrect) {total++;}
        console.log("------------------------");
    }
    console.log(`user score: ${total}`);
    console.log('Check the console for your quiz results.');
}
}
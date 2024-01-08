const myButton = document.getElementById('mybutton');

myButton.addEventListener('click',func);

function func(){const correctAnswers = {
    question1: "string",
    question2: "float",
    question3: "twenty-two",
    question4: "zero"
};

const questions = [
    "Question1: what will be the output on console: console.log(typeof('5')) 1: string 2: number 3: NaN 4: undefined",
    "Question2: which one of these is not a data type in JavaScript? 1:Number 2: string 3: bigInteger 4: float ",
    "Question3: what's the output of this statement: console.log('2'+2)? 1: twenty-two 2: four 3: null 4: undefined",
    "Question4: what's the output of this statement: console.log('2'-2)? 1: zero 2: twenty-two 3: null 4: error"
];

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
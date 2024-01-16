const myButton = document.getElementById('mybutton');

myButton.addEventListener('click',func);

async function func(){
    const URL = "https://opentdb.com/api.php?amount=30&category=18&difficulty=easy&type=multiple";

    const response = await fetch(URL);

    const result = await response.json();

    console.log(result);

    var score = 0;
    

    for(let i =0; i<5; i++){

    var optionCounter = 1;
    const question1 = result["results"][i]["question"];

    const options = result["results"][i]["incorrect_answers"];


    options.push(result["results"][i]["correct_answer"]);

    
    
    const userResponse = prompt(`${question1}:\nhere are your options:\n${options.map((value)=>{return `${optionCounter++} : ${value} `})}\ntype your answer`);
    const correctAnswer = String(result["results"][i]["correct_answer"]);


    if(userResponse.toLowerCase() === correctAnswer.toLowerCase()){
        alert("correct answer");
        score++;
    }
    else{
        alert("oops not the right answer. the right answer is : " + correctAnswer);
    }
 }  
   console.log(`you answers ${score} questions right out of 5`);

}


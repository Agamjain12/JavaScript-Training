//                           functions


// 1. function declaration

function f(x,y){ 
    if(x==y){
        console.log("coercion took place");
    }

}

f("2",2,2,3,4); // optional parameters

// 2. function declaration

let info ={
    name: "simo",
    age: "22"
};

function ph(myObj){
    myObj.name = "Agam";
}

ph(info);

console.log(info.name);

// function expressions

let s = function(x){
    console.log(typeof(x));
};

console.log(s('3'));


// Arrow functions

let arr = (x,y) =>{
    return x+y;
};
console.log(arr(2,3));

// this can also be written as

let arrr = (x,y) =>  x+y;
console.log(arrr(2,4));


//                 Call back functions
//                 Passing function as a value

function foo(bar){
    bar();
 }

// bar accepts a function, it can be anonymous

foo(function(){
console.log('meh');  
})

// or you can create a function then pass it
function moos(){
console.log('moooo');
}

foo(moos);



//                           Pure functions
// pure functions: They’re created for predictability, Always produce the same output for same    // input, meaning every variable and everything is controlled by the function. For eg:
function f(name)
{  console.log('hello'+ name); 
}
// This will always print hello name.
// But if you make sudden changes to the code:


//                       impure functions


function f(name) 
{  console.log(greeting + name)
}
var greeting = 'hello';

// Now the output could differ as greeting variable is outside the scope of function and it is not 
// controlled by it, this variable will be called side effect. We’ll call it an impure fuction now.



//           IIFE(immediately invoked function expression) functions

var v = {
    name : '',
    age: '22'
};
(function(){
    v.name = "agam";
}
)();

console.log(v.name);


//                If-Else statements

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
console.log("Your number is the square root of " +
theNumber * theNumber);
}
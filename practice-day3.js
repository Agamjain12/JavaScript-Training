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

// arrow function implicit return

const art1 = () => (
   Math.floor( Math.random() *5 ) +1
) 
console.log(art1())  // this returns a random number from 1 to 5 without using the word return


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


// shortcircuiting of logical opeators

// logical AND
// Example 1
const result = false && doSomething(); // doSomething() is not called, and result is false

// Example 2
const x = 5;
const y = x && 10; // y is assigned the value 10 because x is truthy

// logical OR

// Example 1
const rr = true || doSomething(); // doSomething() is not called, and result is true

// Example 2
const xx = 0;
const yy = x || 10; // y is assigned the value 10 because x is falsy


//                   for loop

for(let i=0; i<5; i++){
    console.log(`i yawned ${i} times in last 5 min`);
}

//                   label break 

let xz = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", xz);
  xz += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && xz === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}


//          continue statement

let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
// Logs:
// 1 3 7 12


//             for...in and for...of loop for iterating over array and objects

let obje = {
    name: 'agam',
    age: '12',
    city: 'imac'
};

for(let key in obje){
    console.log(key +':'+obje[key]);
}


// for...of loop

let arra = [1,2,3,4];

for(let num of arra){
    console.log(num);
}
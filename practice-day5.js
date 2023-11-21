//             setTimeout and setInterval

const name = prompt("what's your name");

setTimeout(()=>{
    console.log(`wow it took me 3 seconds to get your name right, that's  a werid name, ${name}`)
}, 3000); // expected output will show up on console after a delay of 3000 milli seconds ie, 3 seconds
// these timeouts can be cancelled using clearTimeout() tmehod

// setInterval 

setInterval(()=> {
    console.log("help im stuck in a loop, get me out of here")
},2000); // call back will keep executing itself every 2 seconds untill it is closed.
// to close it, you need to store the id of the function and call clearInterval() method in the console


// setTimeout() is an asynchronous function, meaning that the timer function will not pause 
//execution of other functions in the functions stack.

setTimeout(() => {
    console.log("this is the first message");
  }, 5000);
  setTimeout(() => {
    console.log("this is the second message");
  }, 3000);
  setTimeout(() => {
    console.log("this is the third message");
  }, 1000);
  
  // Output:
  
  // this is the third message
  // this is the second message
  // this is the first message

  
  //  this problem with setTimeout 

  const myArray = ["zero", "one", "two"];
  myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
  } ;

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"

// The above works because when myMethod is called, its this is set to myArray by the call, 
// so within the function, this[sProperty] is equivalent to myArray[sProperty]. However,in 
// the following:

setTimeout(myArray.myMethod, 1.0 * 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1.5 * 1000, "1"); // prints "undefined" after 1.5 seconds

// thats why it is adviced to use wrapper function to set this to required values

setTimeout(function () {
    myArray.myMethod();
  }, 2.0 * 1000); // prints "zero,one,two" after 2 seconds
  setTimeout(function () {
    myArray.myMethod("1");
  }, 2.5 * 1000); // prints "one" after 2.5 seconds
  
// alternatively you can use bind() too

const myArray = ["zero", "one", "two"];
const myBoundMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
}.bind(myArray);

myBoundMethod(); // prints "zero,one,two" because 'this' is bound to myArray in the function
myBoundMethod(1); // prints "one"
setTimeout(myBoundMethod, 1.0 * 1000); // still prints "zero,one,two" after 1 second because of the binding
setTimeout(myBoundMethod, 1.5 * 1000, "1"); // prints "one" after 1.5 seconds

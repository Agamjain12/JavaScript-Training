//               lexical scoping
// lexical scoping is a function having access to the parent scope

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function, name has function scope
    }
    displayName();
  }
  init();
  
  if (Math.random() > 0.5) {
    const x = 1; //const and let have block scope
  } else {
    const x = 2;
  }
  console.log(x); // ReferenceError: x is not defined
  

  //                closure
  // A closure is a function having access to the parent scope, even after the parent function has closed.
  // A closure is created when we define a function , not when a fucntion is created
  const myFunction = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
         console.log(myValue += 1);
    }

    return childFunction;
}

const result = myFunction(); // result stores the anonymous(child) funciton returned by myFunction
console.log(result); // prints the anonymous function
result(); // prints whats inside the childFunction, thing to be noted is that the childFunction i.e the result function is still accessing the value of parent function even though the parent function is done executing 
result();
result();


//      use cases of closure
//      function/Object factory 


function createPerson(name, age) {
    // Private state using closure
    const isAdult = () => age >= 18;
  
    // The actual object with properties and methods
    const person = {
      name,
      age,
  
      // Method to check if the person is an adult using closure
      isAdult() {
        return isAdult();
      },
  
      // Method to greet the person
      greet() {
        console.log(`Hello, my name is ${this.name}.`);
      },
    };
  
    return person;
  }
  
  // Usage of the factory function to create person objects
  const person1 = createPerson('Alice', 25);
  const person2 = createPerson('Bob', 16);
  
  console.log(person1.isAdult()); // Outputs: true
  console.log(person2.isAdult()); // Outputs: false
  
  person1.greet(); // Outputs: Hello, my name is Alice.
  person2.greet(); // Outputs: Hello, my name is Bob.
  



  //                         call,bind,apply

  // call method is used for invoking function with specified this value, it manipulates the this value

  let name1 = {firstName: "agam", lastName: "jain"};

  let ret = function(hometown,occupation){
    console.log(this.firstName +" "+ this.lastName + " "+ hometown+""+occupation);
  }

  let name2 = {firstName: "simo", lastName: "jain"};
  let name3 = {firstName: "simo", lastName: "jain"};

  console.log(ret.call(name1,"kerala","Trainee"));

  console.log(ret.apply(name2,["kerala","Trainee"]));

  let c = ret.bind(name3,"goa","painter");



  //           prototype and prototype chaining

  //Every object in JavaScript has a built-in property, which is called its prototype. 
  //The prototype is itself an object, so the prototype will have its own prototype, 
  //making what's called a prototype chain. 

  // assigning prototype using object.create
  let cot = {
    greet(){
           console.log("bla");
    }
  };

  let cos = Object.create(cot);
  cos.greet();
  
  // using _proto_ (shoudnt be used anymore,deprecated, setPrototypeOf is preferred)

  const o = {
    a: 1,
    b: 2,
    __proto__:{
      b:3,
      c:2
    },

  };

  // When an inherited function is executed, the value of this points to the inheriting object, 
  // not to the prototype object where the function is an own property.

  let parent = {
    value: 2,
    calc(){
      return this.value+1;
    }
  };

  let child = {
    __proto__: parent,
  };

  console.log(child.calc()); // 3

  child.value = 5;

  console.log(child.calc()); // 6
  console.log(parent.calc()); // 3

// making chains of prototypes using constructor 
function Base() {}
function Derived() {}
// Set the `[[Prototype]]` of `Derived.prototype`
// to `Base.prototype`
Object.setPrototypeOf(Derived.prototype, Base.prototype); // Derived.prototype is inherited from Base.prototype

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null

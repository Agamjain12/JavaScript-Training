//               classes
// classes are template for creating objects. they are special function in javscript.

// Declaration
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  
  // Expression; the class is anonymous but assigned to a variable
  const Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  
  // Expression; the class has its own name
  const Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };

  // the reason for the class its own name in class expression is to have the possibility of using class reference inside the class open
  // for example:
  const Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    static createSquare(side) {
      return new Rectangle2(side, side); // referencing to itself
    }
  };
  
  const squaree = Rectangle.createSquare(5);

  // class declarations have the same temporal dead zone restrictions as let or const and behave as if they are not hoisted.
  const obj = Rectangle(2,5);

  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  } // will have a referece error: cannot access 'Rectangle before initialization'


  //            class body
  // the class body is executed in strict mode by default
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    *getSides() { // function generator 
      yield this.height;
      yield this.width;
      yield this.height;
      yield this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100
  console.log([...square.getSides()]); // [10, 10, 10, 10]
  

  //               generator functions 

  //               Description

 // A function* declaration creates a GeneratorFunction object. Each time when a generator function 
 //is called, it returns a new Generator object, which conforms to the iterator protocol. 
 //When the iterator's next() method is called, the generator function's body is executed until 
 //the first yield expression, which specifies the value to be returned from the iterator or, with 
 //yield*, delegates to another generator function. The next() method returns an object with a value 
 // property containing the yielded value and a done property which indicates whether the generator 
 //has yielded its last value, as a boolean. Calling the next() method with an argument will resume the 
 // generator function execution, replacing the yield expression where an execution was paused with the argument from next().
  function* generator(i) {
    yield i;
    yield i + 10;
  }
  
  console.log([...generator(10)]); // [10,20]
  
  const gen = generator(10);
  
  console.log(gen.next().value);
  // Expected output: 10
  
  console.log(gen.next().value);
  // Expected output: 20

 //     another example
 function* idMaker(){
    let id = 0;
   
  while(true){
      yield `your id is : ${id++}`;
  }
    
}
const id = idMaker();
console.log(id.next().value); //0
console.log(id.next().value); //1
console.log(id.next().value); //2

//    another example

function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
  }
  
  function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
  }
  
  const gen1 = generator(10);
  
  console.log(gen1.next().value); // 10
  console.log(gen1.next().value); // 11
  console.log(gen1.next().value); // 12
  console.log(gen1.next().value); // 13
  console.log(gen1.next().value); // 20

  // return statement in generator 

  function* yieldAndReturn() {
    yield "Y";
    return "R";
    yield "unreachable";
  }
  
  const gen2 = yieldAndReturn();
  console.log(gen2.next()); // { value: "Y", done: false }
  console.log(gen2.next()); // { value: "R", done: true }
  console.log(gen2.next()); // { value: undefined, done: true }



  // private fields and methods


  class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }
  }
  
  const obj1 = new Rectangle(10,11);
  console.log(obj1.width); // prints undefined, can not access private fields outside of the class


  //         inheritance 
  

  //    getters and setters 

  class Mack{
    book;
    get nameOf(){
        return this.book;
    }
    set nameOf(book){
        this.book = book;
    }
    
}

const mack = new Mack();
mack.nameOf = "elitebook";
console.log(mack.nameOf);


//   garbage collection methods(algorithms)

// reference counting algorithm
// if an object is not being referenced by any object than its memory is released by gc

// this algorithm does not considers circular references 

function func(){
    const x = {};
    const y = {};
    x.a = y;
    y.a = x;
} // case of circular reference

func();

// mark sweep algorithm 
// This algorithm reduces the definition of "an object is no longer needed" to "an object is unreachable(from the global object)".
// it solves the cyclic reference issue
// above, after the function call returns, the two objects are no longer referenced by any resource that is 
// reachable from the global object. Consequently, they will be found unreachable by the garbage collector and 
// have their allocated memory reclaimed.

//Mark Phase:

// The algorithm starts by traversing the entire object graph, starting from known roots (global variables, local variables, etc.).
// It marks each object that is directly or indirectly reachable from the roots as "live" or "reachable."

// Memory leakage pitfalls 

// Excessive use of globals by creating global variables or by omitting the var keyword in local scope
// Forgetting the clearing of timers like setInterval()
// Unnecessary use of closures (closures always keep a reference of the variables from the parent function even if the parent function has completed execution).

// delete keyword
// deletes element of array or keys of object (wont delete the inherited properties, will also not delete keywords)
// it does not immediately free up the memory but ends the reference so when the gc cycle begins, they'll be deleted

function MyClass() {}
MyClass.prototype.myProperty = 'Hello';

var obj = new MyClass();

delete obj.myProperty; // Does not delete, as myProperty is inherited
console.log(obj.myProperty); // 'Hello'


// When you delete an array element using delete, it leaves a hole in the array, and the length of the array is not automatically updated. 
var arr = [1, 2, 3, 4];
delete arr[2];
console.log(arr); // [1, 2, <1 empty item>, 4] (length is not updated)

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
// it solved the cyclic reference issue
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
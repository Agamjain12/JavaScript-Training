//                loose equality and tight equality


console.log(2=="2"); // returns true because coercion take place and converts string into number
console.log(2==="2"); // returns false because the type of values is being compared and conversion don't take place.



//                Strings and their properties

// slice

console.log("monastraries".slice(3,6));

let v = "jujutsu";
let w = v.slice(1,3);
console.log(w);

// indexOf

console.log("bookkeeper".indexOf('ee')); // indexOf property of string lets you search for more than characters
console.log("tywen".indexOf('e'));

// trim

const agam = "  meow ";
console.log(agam.trim()); // removes all the leading and trailing spaces
// it also removes newlines, tabs, and, similar characters from start and end of the string
console.log(" okay \n ".trim());

// padStart and padEnd

console.log(String(12345).padStart(1, "0")); //padStart and takes the desired length and padding character
// as arguments.

console.log(String(123).padEnd(4, "1")); // works same as the padStart but it add substrings to the 
// end of string


// You can split a string on every occurrence of another string with
// split and join it again with join.

let sentence = "leading case of chlymedia";
let words = sentence.split(",");

console.log(words);

// joining words again with join method

console.log(words.join(". "));

// repeat method

console.log("agam".repeat(3)); // repeat method repeats the given strings and glue them together

// length method

console.log("reference".length); // returns the length of the string.





//            Number precision and methods

//  toPrecision method formats the number to a specified length
let s = 13.5812;
console.log(s.toPrecision(3)); // prints 13.6
console.log(s.toPrecision(10)); // prints 13.58120000



//                      methods

function f(x){
    console.log(x.toString()); // prints a string value of given number
    console.log(x.toFixed(0)); // prints decimals upto given number
    console.log(x.valueOf());  // returns a number as a number
}

f(23.48);




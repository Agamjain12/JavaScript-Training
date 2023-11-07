                               //var keyword

for(var i=0; i<5; i++){
    setTimeout(function (){
      console.log(i);
    }, i*1000);
  } // it prints 5 repeatedly because i here has a function scope


                               // let Keyword
 
  for(let i=0; i<5; i++){
    setTimeout(function (){
      console.log(i);
    }, i*1000);
  } // it prints 0 1 2 3 4 5 because i here has a block scope


                              // const keyword


 ( function func(){
    const mile = 1.60394;
    console.log("1 mile = "+ mile + "km");
    console.log(`2 mile = ${2 *mile }`);
  })(); //value of const keywords remain unchanged



  //                      Data types


  // Numbers

  const a = 0;
  const b = 10/a;
  console.log(b); 

  // special numbers -Infinity, Infinity and NaN

  console.log(0-Infinity); // prints -Infinity
  console.log(0-0); // prints NaN(not a number)
  console.log("agam"/12); // prints NaN



  //                           Big Integer

  var t = BigInt(1234534425235235252553453453453);
  var r = 42334234n;
  console.log(r+t); // BigInt is used for more precise and accurate calculation of big numbers.

  // big integer has no concept of Infinity so if you divide a bigint number by 0, it will throw an error




  //                          String

  console.log("sup frog"); // texts surrounded by doubles quotes are string literal
  console.log('agam'); // single quotes can be used too

  // back tick provides extra functionality (template literals)
  const mile = 1.60394;
  console.log(`2 mile = ${2 *mile }`);

  //escaping

  console.log("i'll reveal this secret in next line \n ha im not gonna tell you ");
  console.log("lost \"\\n\"");
  // or
  console.log('lost "\\n"');



  
  
  //                       boolean values true/false on/off 0/1

  console.log('agam'>'AGAM'); // prints true because lowercase letters have higher unicode value

  if(1){
    console.log("works");
  } // condition is true




  //                            null and undefined

  var v;
  console.log(v); // prints undefine since v is infact undefined

  var v = "agam";
  console.log(v - 5); // prints NaN which stands for not a number





  //                         Symbol

  const s1 = Symbol(); // generates some numbers that are unique
  const s2 = Symbol(); // they might look the same but when compared they'll differ

  console.log(s1==s2); // prints false

  // even if i put same values in both the variable, they'll still differ


  // symbol might be used as an identifier for object purpose. for example,

  let user = {
    id : 123,
    name : "agam"
  };

  const idSym = Symbol('id');
  user[idSym] = 1234;

  console.log(user[idSym]); // prints 1234

  // we could use the symbol inside the object too but with a little change in syntax

  const idSym1 = Symbol('id');

  let user = {
    id : 123,
    name : "agam",
    [idSym1] : 12345
  };

  // symbols don't show up when using Object.getOwnPropertyNames() but they do show up in
  // getOwnPropertySymbol

  const sym1 = Symbol.for('cat');
  const sym2 = Symbol.for('cat'); // when compared, these two will be same because they'r global symbol now


//                        Arrays and methods

const arr = ["me", "why", "ain't", "nothing", "but"];
arr.push("a"); // elements to insert at the end of array
arr.unshift("tell") // elements to insert at the start
arr.push("heartbrake");

arr.unshift("tell");
arr.push("heartbrake");

arr.pop(); // deletes the last element from array
arr.shift(); // deletes the first element from array

const arr1 = ["tell", "me", "why", "ain't", "nothing", "but", "a", "mistake"];

const arr2 = arr.concat(arr1);

console.log(arr2.includes("tell")); // expected output true

arr2.reverse(); // rotates the array

arr1.slice(1,3); // copies the given portion of the array(3 is exclusive), original array remains unchanged
arr1.splice(0,1); // removes the specified indexed elements from array, original array is modified
arr1.splice (2,0,"meow","feline"); // adds elements to specifed index 
arr1.sort()



// 2D arrays

let arrd = [
    ['preticia','morgan','emily'],
    ['megan','thee','stallion'],
    ['double','decker','bus']
]

for(let i =0; i<arrd.length; i++){
    const names = arrd[i];
    for(let j=0; j<names.length; j++){
        console.log(names[j]);
    }
}

// or

for(let row of arrd){
    for(let name of row){
        console.log(name)
    }
}


//               for each loop

const saf = [1,2,3,4,5,6,7,8,9];

saf.forEach(function(ele){
    console.log(ele);
})



//                        Maps in array


const fullNames = [{first: 'Albus', last: 'Dumbledore'}, 
{first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, 
{first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, 
{first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];



const firstNames = fullNames.map(function(names){
    return names.first; })


//   filter method in array

const numbers = [1,2,3,4,5,6];
const oddNumbers = numbers.filter(number => number%2 != 0);


//                        Maps and set


const mapp = new Map();


mapp.set(1, "fearless");
mapp.set(2, "speak now");
mapp.set(3, "red");
mapp.set(4, "1989");

console.log(mapp.get(2));
console.log(mapp.size);
console.log(mapp.delete(3));

// iterating map using forEach loop

map.forEach((key,value) => {
    console.log(`${key} = ${value}`)
});

// cloning map

const manp = new Map([[1, "one"]]); 

const clone = new Map(manp);

console.log(clone.get(1));


//                   merging maps


const mak1 = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"]
  ]);
  
  const mak2 = new Map([
    [1, 'uno'],
    [2, "des"],
  
  ]);
  
  // Merge two maps. The last repeated key wins.
  // Spread syntax essentially converts a Map to an Array
  
  const merged = new Map([...mak1, ...mak2]);
  
  merged.forEach((key,value)=>{
    console.log(`${key} = ${value}`);
  });
  


//                     object creation and accessing the properties

const con = {
    height: "34cm",
    chest: 33,
    neck: "god knows",
    background: {city: "bleh", country: "winterfell"}
}

// using a construction function

function Man(skill) {
     this.skill = skill
}

const man = new Man("mainsplaining");
console.log(man);

//accessing the properties

//by dot notation

con.height = "35cm";

// Bracket notation

con["neck"] = "how am i supposed to know that";

// non-inherited properties of objects can be deleted 

delete con.neck;

console.log("neck" in con); //false

// fetching properties of objects using for..in loop

const faceCard = {
    devis: 'valid',
    mark: 'invalid',
    nemoy: 'valid',
    beck: 'valid'
}

for(let check in faceCard){
    console.log(`${check} facecard is ${faceCard[check]}`)
}

// accessing values only

for(let val in Object.values(faceCard)){
    console.log(val);
}




//                           this keyword

const ars = {
    name : "agam",
    func : function(){
        return this.name; // implicit binding
    }
}

console.log(ars.func()); // expencted output 'agam'. this when used in the method, refers to the object

//           Explicit binding(when binded with call(), apply(), bind() method)


function ageVerify(){ 
    if(this.age> 18){ 
        console.log("Yes you can ride the roller coster"); 
    } else { 
        console.log("Oopsie you cannot ride the roller coster"); 
    } 
} 
  
const per1 = {age: 21}; 
const per2 = {age: 16}; 
ageVerify.call(per1); 
ageVerify.call(per2);


//                default binding(when this keyword is used in global scope, this is set to window object)



const age = 22; 
function verifyAge (){ 
    return this.age; 
} 
  
console.log(verifyAge()); // expected output undefined



//                  program to create a function to add key value pair to an object


function add(obj, key, value){
    if(!obj.hasOwnProperty(key)){
        obj[key] = value;
        console.log(`added key-value pair ${key} => ${value}`);
    }
    else{
        console.log("this pair already exists");
    }
}

const myObj = {
    name: 'agam',
    age: 22
};

add(myObj, "haircolor", "blue");
console.log(myObj); // expected output {"name": "agam",  "age": 22, "haircolor": "blue"}

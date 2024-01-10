//                          JSON
// JSON is data based data format, has javascript object literal syntax

// JSON exists as strings, in order to access them they must be converted in native object
// it is done by parse method

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let obj = JSON.parse(text); // deserializing 

console.log(obj["employee"][0]["firstName"]); // John

// Serializing, stringify ommits undefined, function, null, bigInt if they are encountered, or set them to null




let obj1 = {
    i: "woof",
    you: "woof",
    we: "woof"
};

let str = JSON.stringify(obj1); // Serializing

// Stringify takes additional arguments replacer function and a string or number to use a "space" in the returned string

// The replacer function allows you to modify the behavior of the stringification process by 
//providing a transformation function. it filters, modify or specify values to include in the final
// JSON string


//                           replacer argument (function as replacer)


let details = {
    name: "mek",
    id: 23423,
    email: "bla@gmail.com",
    password: "sdf"
};

let obj3 = JSON.stringify(details, (key,value)=>{ // replacer function
    if(key==="password"){
        return undefined;
    }
    if(typeof value ==="number"){
        return undefined;
    }
   return value;
});

console.log(obj3);

// The space argument allows you to add indentation to the JSON string, making it more readable.

let st = JSON.stringify(details,null,2); // string is indentated by 2 space
let st1 = JSON.stringify(details,null,'*_*'); // string is identated by *_*


//            arrays as replacer

let skum = {
    "stung": "yup",
    "swell": "yup",
    "mellow": "nope"
};

let mos = JSON.stringify(skum,["stung","swell"]);
console.log(mos);

// toJSON method
// if a object being serialized have toJSON method, the method will be called before the stringification, and it will tell 
// how object should be serialized 

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    toJSON: function() {
      return {
        fullName: this.firstName + " " + this.lastName,
        age: this.age
      };
    }
  };
  
  const jsonStringgg = JSON.stringify(person);
  console.log(jsonStringgg);
  

// dealing with circularReference, generally a type error is thrown if circular reference is detected
// type error is thrown if a BigInt value is encountered

const circularObject = {};
circularObject.circularRefer = circularObject;

// Circular reference handler
const circularReferenceHandler = (key, value) => {
  if (typeof value === 'object' && value !== null) {
    return '[Circular Reference]';
  }
  return value;
};

// Using the circular reference handler in JSON.stringify
const jsonStringg =  JSON.stringify(circularObject, circularReferenceHandler, 2);

console.log(jsonStringg); // [Circular Reference]


JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify(new Date(1906, 0, 2, 15, 4, 5));
// '"1906-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String("false"), new Boolean(false)]);
// '[3,"false",false]'

// String-keyed array elements are not enumerable and make no sense in JSON
const a = ["foo", "bar"];
a["baz"] = "quux"; // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] });
// '{"x":[10,null,null,null]}'

// Standard data structures
JSON.stringify([
  new Set([1]),
  new Map([[1, 2]]),
  new WeakSet([{ a: 1 }]),
  new WeakMap([[{ a: 1 }, 2]]),
]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([
  new Uint8Array([1]),
  new Uint8ClampedArray([1]),
  new Uint16Array([1]),
  new Uint32Array([1]),
]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({
  x: 5,
  y: 6,
  toJSON() {
    return this.x + this.y;
  },
});
// '11'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, (k, v) => {
  if (typeof k === "symbol") {
    return "a symbol";
  }
});
// undefined

// Non-enumerable properties:
JSON.stringify(
  Object.create(null, {
    x: { value: "x", enumerable: false },
    y: { value: "y", enumerable: true },
  }),
);
// '{"y":"y"}'

// BigInt values throw
JSON.stringify({ x: 2n });
// TypeError: BigInt value can't be serialized in JSON



//   parse
// is used for deserializing

// basic usage 

let tex = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const ob = JSON.parse(tex);
console.log(ob); // expected output native object 

// reviser function 

const jsonString = '{"name":"John","age":30,"city":"ExampleCity"}';

const par = JSON.parse(jsonString, (key,value)=>{
    if(key==='age'){
        return value*2;
    }
    return value;
}
);

console.log(par);

// handelling errors for invalid JSON strings

let invalidString = '{"name": "agam", "city":}';

try{
const obb = JSON.parse(invalidString);
} 
catch(error){
    console.error("Error parsing JSON: ", error.message); //Error parsing JSON:  Unexpected token } in JSON at position 24
}


//                       ES6 MODULES

import add from './module.js';

const result = add(2,5);

console.log(result); 

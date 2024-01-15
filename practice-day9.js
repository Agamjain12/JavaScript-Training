//                       callback

function trial(callback){
    const str = '{"name" : "agam", "address" :}';
    const obj = JSON.parse(str);
    console.log(obj);
    callback();
}

trial(function(){
    console.log("am i going to get a chance to execute"); // inversion of control
}); // error, callback function does not executes



//   callback hell / pyramid of doom
// execution of one function depending upon the execution of another

setTimeout(()=>{
    console.log("uno");
    setTimeout(()=>{
        console.log("dos");
        setTimeout(()=>{
            console.log("tres");
        },1000)
    },1000)
 },1000)

 //            promises
// promise object is a placeholder for a certain period of time untill we recieve a value from asynchronous functions
 const GITHUB_API = "https://api.github.com/users/AgamJain12";
 const user = fetch(GITHUB_API); // returns a promise

 user.then((data)=>{
    console.log(data);
 })

 // another example 

const MY_URL = "https://api.github.com/users/AgamJain12";

const obj = fetch(MY_URL);

obj.then((data)=>{
    return data.json();
}).then((apiData)=>{
    console.log(apiData);
});

//         creating a promise 

const cart = ["mouse","keyboard","whatNot"];


createOrder(cart)
.then((orderId)=>{
    console.log(orderId);
})

function createOrder(cart){
    const promise = new Promise(function(resolve,reject){
       if(!validateCart){
           const err = new Error("invalid cart");
       } 
       const orderId = "1234";
       resolve(orderId);
    });
    return promise;
}
function validateCart(){
    return true;
}

// A promise is an object representing the eventual completion(or failure) of an asynchronous function

// promise.all (returns a single promise, is settled when all the promises of iterator are fulfilled)

const promiseA = Promise.resolve(42);
const promiseB = Promise.resolve("worked");
const promiseC = Promise.resolve((resolve,reject)=>{
    setTimeout(resolve,100,"fulfilled");
})

Promise.all([promiseA,promiseB,promiseC])
.then(values => {
    console.log(values)
})
.catch(err =>{
    console.log(err);
});

// promise.allSettled (returns a single promise, settled when all of the promises of iterator are fulfilled(accepted or rejected))

const promise1 = Promise.reject(42);
const promise2 = Promise.resolve("worked");
const promise3 = Promise.resolve((resolve,reject)=>{
    setTimeout(resolve,100,"fulfilled");
})

Promise.all([promise1,promise2,promise3])
.then(values => {
    console.log(values)
})
.catch(err =>{
    console.log(err);
});

// output: 

// [
//     { status: 'rejected', reason: 42 },
//     { status: 'fulfilled', value: 'worked' },
//     { status: 'fulfilled', value: [Function (anonymous)] }
//   ]
  

// promise.any (Takes an iterable of promises as input and returns a single Promise. This returned promise 
// fulfills when any of the input's promises fulfill(accepted), with this first fulfillment value. It rejects when all 
// of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.)

// Resolves as soon as one promise fulfills (ignores rejections until all promises are rejected).




//                  fetch
//The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// A fetch() promise only rejects when a network error is encountered (which is usually when there's a 
// permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.


fetch("https://icanhazdadjoke.com/",{
    method : 'GET',
    headers : {
        'accept' : 'application/json'
    }
})
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch(err =>{
    throw new Error("something fishy");
})



async function tvMaze(){

    const url = "https://api.lrs.org/random-date-generator?year=2015";

    const dResponse = await fetch(url);

    const result = await dResponse.json();

    const firstDateInfo =  Object.keys(result.data)[0];
    ;
     console.log(firstDateInfo);
    const MY_URL = `https://api.tvmaze.com/schedule?country=US&date=${firstDateInfo}`;
    
    const response = await fetch(MY_URL);
    
    if(!response.ok){
        console.log("error ",response.status);
    }
    
    const data = await response.json();
    console.log(data);
    
}

tvMaze();
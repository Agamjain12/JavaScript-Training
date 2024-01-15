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
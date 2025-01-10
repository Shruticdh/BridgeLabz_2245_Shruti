// to handle asynchronous programing in javascript
// empty object with some data value in it
// promises
var watchmovies = true;

const p1 = new Promise((resolve , reject) => {
    if(watchmovies){
        resolve("popcorn");
    }
    else{
        reject("no popcorn");
    }
});

p1.then((resovle) => {
    console.log(resovle);
});
// error handling
p1.catch((reject) => {
    console.log(reject);
});
p1.finally((reject) => {
    console.log("p1 finally executed");
})

//fetch
// const API = ""
// const user = fetch(API);
// console.log(user);



var watchmovies = true;
var isMovieGood = true;

const p1 = new Promise((resolve , reject) => {
    if(watchmovies){
        resolve("popcorn");
    }
    else{
        reject("no popcorn");
    }
});

const p2 = new Promise((resolve,reject) => {
    resolve("get soft drink");
    reject("not get soft drink");
});

const p3 = new Promise((resolve,reject)=>{
    if(isMovieGood){
        resolve("Watched full movie");
    }
    else{
        reject("I m leaving");
    }
})

p1.then((resolve) =>{
    console.log(resolve);
    return p2;
})
.then((resolve)=>{
    console.log(resolve);
    return p3;
})
.then((resolve)=>{
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject);
});

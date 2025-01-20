// it will always return a promise 
async function getData(){
    return "Shruti";
}
let dataPromise = getData();
console.log(dataPromise);


//when we have promise
const p1 = new Promise((resolve , reject) => {
    resolve("Shruti");
})
async function getData2(){
    return p1;
}
let promise = getData2();
promise.then((result) => {
    console.log(result);
})
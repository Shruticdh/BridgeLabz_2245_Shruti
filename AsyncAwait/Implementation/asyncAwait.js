const p1 = new Promise((resolve , reject) => {
    resolve("Shruti12");
});
// promise
function getData(){
    p1.then((result) => {
        console.log(result);
    });
}
getData();
//async function 
async function handlePromise() {
    const data = await p1;
    console.log(data);
}
handlePromise();

// by using setTimeout
const p2 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("Shruti23");
    },10000);
});
const p3 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("Shruti45");
    },5000);
});
//promise
function getData2(){
    p2.then((result) => {
        console.log(result);
    });
    console.log("Nivu");
}
getData2();
//async functions
async function handlePromise2() {
    console.log("Hello Shruti");
//after this when it sees the await the handlepromise function execution will supsebded until the promise is not resolved
//when the promise is resoveld then only in it move ahead    
    const data = await p3;
    console.log("Hello tanya");
    console.log(data);
//again after this when it sees the await the handlepromise function execution will supsebded until the promise is not resolved
//when the promise is resoveld then only in it move ahead       
    const data2 = await p2;
    console.log("Hello Preu");
    console.log(data2);
}
handlePromise2();
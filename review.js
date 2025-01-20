// // let a=5;
// // let b=6;

// // function add(a,b){
// //    return a+b;
// // }

// // function addNumbers(a,b){
// //    return new Promise((resolve , reject) => {
// //       setTimeout(()=>{
// //          resolve(add(a,b));
// //       }, 1000);
// //    })
// // }

// // addNumbers(a,b).then((result) => {
// //      console.log(result);
// // })
// // .catch((error) => {
// //      console.log(error);
// // })

// let a=5;
// let b=6;

// function add(a,b){
//    return a+b;
// }

// function addNumbers(a,b){
//    return new Promise((resolve , reject) => {
//       resolve(add(a,b));
//       // reject("error");
//    })
// }

// addNumbers(a,b).then((result) => {
//      console.log(result);
// })
// .catch((error) => {
//      console.log(error);
// })

const obj1 = { name: "Shruti" };
const copy = { ...obj1 }; 
copy.name = "Nivu"
console.log(copy); 
console.log(obj1.name);


const obj = { details: { name: "Nivu" } };
const deepCopy = JSON.parse(JSON.stringify(obj)); 

console.log(copy); 
console.log(obj); 
console.log(deepCopy); 
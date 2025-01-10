const p11 = new Promise((resolve) => {
    setTimeout(() => {
      console.log("white color p11");
      resolve("p11 resolved");
    }, 2000);
});
  
const p12 = new Promise((resolve) => {
    setTimeout(() => {
      console.log("white color p12");
      resolve("p12 resolved");
    }, 2000);
});
  
const p13 = new Promise((resolve) => {
    setTimeout(() => {
      console.log("white color p13");
      resolve("p13 resolved");
    }, 2000);
});
  
const p14 = new Promise((resolve) => {
    setTimeout(() => {
      console.log("white color p14");
      resolve("p14 resolved");
    }, 2000);
});
  
const p15 = new Promise((resolve) => {
    setTimeout(() => {
      console.log("white color p15");
      resolve("p15 resolved");
    }, 1000);
});
  
const p16 = new Promise((_, reject) => {
    setTimeout(() => {
      console.log("white color p16");
      reject("p16 rejected");
    }, 1500);
});
  

p11.then(() => p12)
   .then(() => console.log("p11 and p12 completed in sequence"));
  
p13.then(() => p14)
   .then(() => console.log("p13 and p14 completed in sequence"));
  

Promise.all([p11, p12, p13, p14])
    .then((values) => console.log("All promises completed:", values))
    .catch((error) => console.log("Promise.all rejected with:", error));
  
Promise.allSettled([p11, p12, p15, p16]).then((results) => {
    console.log("Promise.allSettled results:", results);
});
  
Promise.race([p11, p15, p16])
    .then((value) => console.log("Promise.race resolved first with:", value))
    .catch((error) => console.log("Promise.race rejected first with:", error));

Promise.any([p16, p15, p14])
    .then((value) => console.log("Promise.any fulfilled first with:", value))
    .catch((error) => console.log("Promise.any failed with:", error));
  
  
// 1. setTimeout
setTimeout(() => {
    console.log("Hello after 2 seconds!");
}, 2000);
// Output after 2 seconds: Hello after 2 seconds!

// clearTimeout 
const timeoutId = setTimeout(() => console.log("This won't run"), 2000);
clearTimeout(timeoutId); // Cancels the timeout

// 2. setInterval
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    if (count === 5) {
        clearInterval(intervalId); // Stops the interval after 5 counts
    }
}, 1000);
